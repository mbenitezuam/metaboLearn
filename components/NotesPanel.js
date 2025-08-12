function NotesPanel({ pathway }) {
  try {
    if (!pathway || !pathway.id) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center text-gray-500">No hay ruta seleccionada</div>
        </div>
      );
    }

    const [notes, setNotes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [newNote, setNewNote] = React.useState({
      type: 'text',
      title: '',
      content: '',
      url: '',
      tags: [],
      file: null,
      fileName: '',
      fileType: ''
    });
    const [aiQuestion, setAiQuestion] = React.useState('');
    const [isAskingAI, setIsAskingAI] = React.useState(false);

    const noteTypes = [
      { value: 'text', label: 'Nota de Texto', icon: 'icon-file-text' },
      { value: 'question', label: 'Pregunta', icon: 'icon-help-circle' },
      { value: 'answer', label: 'Respuesta IA', icon: 'icon-message-circle' },
      { value: 'link', label: 'Enlace', icon: 'icon-link' },
      { value: 'image', label: 'Imagen', icon: 'icon-image' },
      { value: 'audio', label: 'Audio', icon: 'icon-mic' },
      { value: 'video', label: 'Video', icon: 'icon-video' },
      { value: 'pdf', label: 'PDF', icon: 'icon-file' },
      { value: 'file', label: 'Archivo', icon: 'icon-paperclip' }
    ];

    const tagOptions = ['importante', 'revisar', 'examen', 'concepto-clave', 'duda', 'resuelto'];

    React.useEffect(() => {
      loadNotes();
    }, [pathway.id]);

    const loadNotes = async () => {
      try {
        if (typeof window.trickleListObjects === 'function') {
          const response = await window.trickleListObjects(`pathway_notes:${pathway.id}`, 50, true);
          setNotes(response.items || []);
        } else {
          console.warn('trickleListObjects no está disponible');
          setNotes([]);
        }
      } catch (error) {
        console.error('Error loading notes:', error);
        setNotes([]);
      } finally {
        setLoading(false);
      }
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        setNewNote({
          ...newNote,
          file: e.target.result,
          fileName: file.name,
          fileType: file.type
        });
      };
      reader.readAsDataURL(file);
    };

    const addNote = async () => {
      if (!newNote.title.trim()) return;
      
      try {
        if (typeof window.trickleCreateObject === 'function') {
          const noteData = {
            pathway_id: pathway.id,
            note_type: newNote.type,
            title: newNote.title,
            content: newNote.content,
            url: newNote.url,
            tags: newNote.tags,
            file: newNote.file,
            fileName: newNote.fileName,
            fileType: newNote.fileType
          };
          
          await window.trickleCreateObject(`pathway_notes:${pathway.id}`, noteData);
          await loadNotes();
          setNewNote({ type: 'text', title: '', content: '', url: '', tags: [], file: null, fileName: '', fileType: '' });
          setShowAddForm(false);
        } else {
          console.warn('trickleCreateObject no está disponible');
        }
      } catch (error) {
        console.error('Error adding note:', error);
      }
    };

    const askAI = async () => {
      if (!aiQuestion.trim()) return;
      
      setIsAskingAI(true);
      try {
        if (typeof window.invokeAIAgent === 'function' && typeof window.trickleCreateObject === 'function') {
          const systemPrompt = `Eres un experto profesor de bioquímica especializado en ${pathway?.name || 'rutas metabólicas'}. 
          Responde de manera clara y educativa en español, usando ejemplos específicos cuando sea apropiado.`;
          
          const answer = await window.invokeAIAgent(systemPrompt, aiQuestion);
          
          // Save question
          await window.trickleCreateObject(`pathway_notes:${pathway.id}`, {
            pathway_id: pathway.id,
            note_type: 'question',
            title: aiQuestion.substring(0, 50) + '...',
            content: aiQuestion,
            url: '',
            tags: ['duda']
          });
          
          // Save answer
          await window.trickleCreateObject(`pathway_notes:${pathway.id}`, {
            pathway_id: pathway.id,
            note_type: 'answer',
            title: 'Respuesta IA: ' + aiQuestion.substring(0, 30) + '...',
            content: answer,
            url: '',
            tags: ['resuelto']
          });
          
          await loadNotes();
          setAiQuestion('');
        } else {
          console.warn('Funciones de inteligencia artificial no están disponibles');
        }
      } catch (error) {
        console.error('Error asking AI:', error);
      } finally {
        setIsAskingAI(false);
      }
    };

    const exportNotesPDF = () => {
      try {
        if (typeof window.jsPDF === 'undefined') {
          alert('Función de exportación PDF no disponible');
          return;
        }

        const { jsPDF } = window.jsPDF;
        const doc = new jsPDF();
        
        // Title
        doc.setFontSize(20);
        doc.text(`Notas: ${pathway.name}`, 20, 20);
        
        // Date
        doc.setFontSize(12);
        doc.text(`Fecha: ${new Date().toLocaleDateString('es-ES')}`, 20, 35);
        
        let yPosition = 50;
        
        notes.forEach((note, index) => {
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
          }
          
          // Note title
          doc.setFontSize(14);
          doc.setFont(undefined, 'bold');
          doc.text(`${index + 1}. ${note.objectData.title}`, 20, yPosition);
          yPosition += 10;
          
          // Note type
          doc.setFontSize(10);
          doc.setFont(undefined, 'normal');
          const noteType = noteTypes.find(t => t.value === note.objectData.note_type)?.label || 'Texto';
          doc.text(`Tipo: ${noteType}`, 20, yPosition);
          yPosition += 7;
          
          // Content
          if (note.objectData.content) {
            doc.setFontSize(11);
            const lines = doc.splitTextToSize(note.objectData.content, 170);
            doc.text(lines, 20, yPosition);
            yPosition += lines.length * 5 + 5;
          }
          
          // URL
          if (note.objectData.url) {
            doc.setFontSize(10);
            doc.text(`URL: ${note.objectData.url}`, 20, yPosition);
            yPosition += 7;
          }
          
          // Date
          doc.setFontSize(9);
          doc.text(`Fecha: ${new Date(note.createdAt).toLocaleDateString('es-ES')}`, 20, yPosition);
          yPosition += 15;
        });
        
        doc.save(`notas-${pathway.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
      } catch (error) {
        console.error('Error exporting PDF:', error);
        alert('Error al exportar PDF');
      }
    };

    const deleteNote = async (noteId) => {
      try {
        if (typeof window.trickleDeleteObject === 'function') {
          await window.trickleDeleteObject(`pathway_notes:${pathway.id}`, noteId);
          await loadNotes();
        } else {
          console.warn('trickleDeleteObject no está disponible');
        }
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6" data-name="notes-panel" data-file="components/NotesPanel.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Mis Notas: {pathway.name}</h2>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <div className="icon-plus mr-2"></div>
              Nueva Nota
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
            <div className="icon-message-circle mr-2"></div>
            Pregunta a la IA sobre {pathway.name}
          </h3>
          <div className="flex space-x-3">
            <input
              type="text"
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              placeholder="¿Qué te gustaría saber sobre esta ruta metabólica?"
              className="flex-1 p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={askAI}
              disabled={!aiQuestion.trim() || isAskingAI}
              className={`px-4 py-2 rounded-lg ${
                aiQuestion.trim() && !isAskingAI
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isAskingAI ? 'Preguntando...' : 'Preguntar'}
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Agregar Nueva Nota</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
                <select
                  value={newNote.type}
                  onChange={(e) => setNewNote({...newNote, type: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  {noteTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                <input
                  type="text"
                  value={newNote.title}
                  onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Título de la nota"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Contenido</label>
              <textarea
                value={newNote.content}
                onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Escribe tu nota aquí..."
              />
            </div>

            {newNote.type === 'link' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                <input
                  type="url"
                  value={newNote.url}
                  onChange={(e) => setNewNote({...newNote, url: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="https://..."
                />
              </div>
            )}

            {(['image', 'audio', 'video', 'pdf', 'file'].includes(newNote.type)) && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subir {newNote.type === 'image' ? 'Imagen' : 
                          newNote.type === 'audio' ? 'Audio' :
                          newNote.type === 'video' ? 'Video' :
                          newNote.type === 'pdf' ? 'PDF' : 'Archivo'}
                </label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  accept={
                    newNote.type === 'image' ? 'image/*' :
                    newNote.type === 'audio' ? 'audio/*' :
                    newNote.type === 'video' ? 'video/*' :
                    newNote.type === 'pdf' ? '.pdf' :
                    '*/*'
                  }
                />
                {newNote.fileName && (
                  <p className="text-sm text-gray-600 mt-2">
                    Archivo seleccionado: {newNote.fileName}
                  </p>
                )}
              </div>
            )}

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={addNote}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Guardar Nota
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">Cargando notas...</div>
            </div>
          ) : notes.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-500">No tienes notas para esta ruta metabólica aún.</div>
            </div>
          ) : (
            notes.map((note) => {
              const noteType = noteTypes.find(t => t.value === note.objectData.note_type) || noteTypes[0];
              return (
                <div key={note.objectId} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`${noteType.icon} mr-2 text-blue-600`}></div>
                      <h4 className="font-semibold text-gray-900">{note.objectData.title}</h4>
                      <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {noteType.label}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteNote(note.objectId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <div className="icon-trash-2 text-sm"></div>
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-3 whitespace-pre-line">{note.objectData.content}</p>
                  
                  {note.objectData.url && (
                    <a
                      href={note.objectData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm flex items-center mb-2"
                    >
                      <div className="icon-external-link mr-1"></div>
                      {note.objectData.url}
                    </a>
                  )}

                  {note.objectData.file && (
                    <div className="mb-3">
                      {note.objectData.note_type === 'image' && (
                        <img
                          src={note.objectData.file}
                          alt={note.objectData.fileName}
                          className="max-w-full h-auto rounded-lg border"
                          style={{ maxHeight: '300px' }}
                        />
                      )}
                      
                      {note.objectData.note_type === 'audio' && (
                        <audio controls className="w-full">
                          <source src={note.objectData.file} type={note.objectData.fileType} />
                          Tu navegador no soporta audio.
                        </audio>
                      )}
                      
                      {note.objectData.note_type === 'video' && (
                        <video controls className="w-full rounded-lg" style={{ maxHeight: '300px' }}>
                          <source src={note.objectData.file} type={note.objectData.fileType} />
                          Tu navegador no soporta video.
                        </video>
                      )}
                      
                      {(note.objectData.note_type === 'pdf' || note.objectData.note_type === 'file') && (
                        <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
                          <div className="flex items-center">
                            <div className="icon-file mr-2 text-blue-600"></div>
                            <span className="text-gray-700">{note.objectData.fileName}</span>
                            <a
                              href={note.objectData.file}
                              download={note.objectData.fileName}
                              className="ml-auto text-blue-600 hover:underline text-sm"
                            >
                              Descargar
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {note.objectData.tags && note.objectData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {note.objectData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500 mt-2">
                    {new Date(note.createdAt).toLocaleString('es-ES')}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('NotesPanel component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.NotesPanel = NotesPanel;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.NotesPanel = true;
}

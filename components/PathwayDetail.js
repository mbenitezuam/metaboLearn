function PathwayDetail(props) {
  const { pathway, onBack } = props || {};
  
  try {
    const [selectedReaction, setSelectedReaction] = React.useState(null);
    const [activeTab, setActiveTab] = React.useState('overview');

    const tabs = [
      { id: 'overview', label: 'Visión General', icon: 'icon-book-open' },
      { id: 'map', label: 'Mapa Visual', icon: 'icon-map' },
      { id: 'exercises', label: 'Ejercicios', icon: 'icon-brain' },
      { id: 'clinical', label: 'Casos Clínicos', icon: 'icon-heart' },
      { id: 'critical', label: 'Pensamiento Crítico', icon: 'icon-lightbulb' },
      { id: 'facts', label: 'Datos Curiosos', icon: 'icon-star' },
      { id: 'notes', label: 'Mis Notas', icon: 'icon-file-text' }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg" data-name="pathway-detail" data-file="components/PathwayDetail.js">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <div className="icon-arrow-left mr-2"></div>
              Volver a rutas
            </button>
            <h1 className="text-3xl font-bold text-gray-900">{pathway.name}</h1>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className={`${tab.icon} mr-2`}></div>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="px-8 pb-8">
          {activeTab === 'overview' && (
            <div>
              <p className="text-lg text-gray-700 mb-6">{pathway.detailedDescription}</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Localización Celular</h3>
                  <p className="text-blue-800">{pathway.location}</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Precursores</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    {pathway.precursors.map((precursor, index) => (
                      <li key={index}>• {precursor}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Productos Finales</h3>
                  <ul className="text-purple-800 text-sm space-y-1">
                    {pathway.products.map((product, index) => (
                      <li key={index}>• {product}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="font-bold text-red-900 mb-3 flex items-center">
                  <div className="icon-heart mr-2"></div>
                  Importancia Clínica y Biomédica
                </h3>
                <p className="text-red-800 leading-relaxed">{pathway.clinicalImportance}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-3 flex items-center">
                    <div className="icon-trending-up mr-2"></div>
                    Condiciones de Activación
                  </h3>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    {pathway.activationConditions?.map((condition, index) => (
                      <li key={index} className="flex items-start">
                        <div className="icon-plus mr-2 mt-0.5 text-xs"></div>
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="icon-trending-down mr-2"></div>
                    Factores de Inhibición
                  </h3>
                  <ul className="text-gray-800 text-sm space-y-1">
                    {pathway.inhibitionFactors?.map((factor, index) => (
                      <li key={index} className="flex items-start">
                        <div className="icon-minus mr-2 mt-0.5 text-xs"></div>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-indigo-900 mb-3 flex items-center">
                  <div className="icon-shuffle mr-2"></div>
                  Interacciones con Otras Rutas Metabólicas
                </h3>
                <p className="text-indigo-800 text-sm leading-relaxed">{pathway.pathwayInteractions}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Reacciones de la Ruta</h2>
                <div className="space-y-4">
                  {pathway.reactions.map((reaction, index) => (
                    <div 
                      key={index}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedReaction(selectedReaction === index ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Paso {index + 1}: {reaction.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{reaction.equation}</p>
                        </div>
                        
                        <div className="text-right">
                          <div className={`font-semibold ${reaction.gibbs < 0 ? 'energy-negative' : 'energy-positive'}`}>
                            ΔG = {reaction.gibbs} kJ/mol
                          </div>
                          <div className="text-xs text-gray-500">
                            {reaction.gibbs < 0 ? 'Exergónica' : 'Endergónica'}
                          </div>
                        </div>
                      </div>
                      
                      {selectedReaction === index && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Enzima</h4>
                              <p className="text-gray-700 mb-2">{reaction.enzyme}</p>
                              <h4 className="font-semibold text-gray-800 mb-2">Mecanismo</h4>
                              <p className="text-gray-600 text-sm">{reaction.mechanism}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Regulación</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {reaction.regulation.map((reg, idx) => (
                                  <li key={idx}>• {reg}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-teal-900 mb-4 flex items-center">
                  <div className="icon-users mr-2"></div>
                  Relevancia para Profesionales de la Salud
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {pathway.professionalRelevance?.map((relevance, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-teal-200">
                      <h4 className="font-semibold text-teal-800 mb-1">{relevance.profession}</h4>
                      <p className="text-teal-700 text-sm">{relevance.application}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h3 className="font-semibold text-yellow-800 mb-2">💡 Punto Clave</h3>
                <p className="text-yellow-700">{pathway.keyPoint}</p>
              </div>
            </div>
          )}

          {activeTab === 'map' && (() => {
            const PathwayMap = window.PathwayMap;
            return PathwayMap ? 
              React.createElement(PathwayMap, { pathway }) : 
              React.createElement('div', { className: 'p-4 text-center' }, 'Cargando mapa visual...');
          })()}
          
          {activeTab === 'exercises' && (() => {
            const Quiz = window.Quiz;
            return Quiz ? 
              React.createElement(Quiz, { pathway }) : 
              React.createElement('div', { className: 'p-4 text-center' }, 'Cargando ejercicios...');
          })()}
          
          {activeTab === 'clinical' && (() => {
            const ClinicalCase = window.ClinicalCase;
            return ClinicalCase ? 
              React.createElement(ClinicalCase, { pathway }) : 
              React.createElement('div', { className: 'p-4 text-center' }, 'Cargando casos clínicos...');
          })()}
          
          {activeTab === 'critical' && (() => {
            const CriticalThinking = window.CriticalThinking;
            return CriticalThinking ? 
              React.createElement(CriticalThinking, { pathway }) : 
              React.createElement('div', { className: 'p-4 text-center' }, 'Cargando pensamiento crítico...');
          })()}
          
          {activeTab === 'facts' && (() => {
            const CuriousFacts = window.CuriousFacts;
            return CuriousFacts ? 
              React.createElement(CuriousFacts, { pathway }) : 
              React.createElement('div', { className: 'p-4 text-center' }, 'Cargando datos curiosos...');
          })()}
          
          {activeTab === 'notes' && (() => {
            const NotesPanel = window.NotesPanel;
            return NotesPanel ? 
              React.createElement(NotesPanel, { pathway }) : 
              React.createElement('div', { className: 'p-4 text-center' }, 'Cargando panel de notas...');
          })()}
        </div>
      </div>
    );
  } catch (error) {
    console.error('PathwayDetail component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.PathwayDetail = PathwayDetail;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.PathwayDetail = true;
}

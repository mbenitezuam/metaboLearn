function WelcomePage(props) {
  const { onContinue } = props || {};
  
  try {
    const developers = [
      'Marcela I. Benítez Díaz Mirón',
      'Gabriela Garza Mouriño',
      'María Elena Castellanos Páez',
      'Rubén Alonso Contreras Tapia',
      'María Jesús Ferrara Guerrero',
      'Marisa Arienti Villegas',
      'Aída del Rosario Malpica Sánchez'
    ];

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('¡Enlace copiado al portapapeles!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
        alert('Error al copiar el enlace');
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4" data-name="welcome-page" data-file="components/WelcomePage.js">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-dna text-3xl text-blue-600"></div>
            </div>
            <h1 className="text-4xl font-bold mb-2">MetaboLearn</h1>
            <p className="text-xl text-blue-100">Plataforma de Aprendizaje Avanzado de Rutas Metabólicas</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="icon-book-open mr-3 text-blue-600"></div>
                  ¿Qué es MetaboLearn?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MetaboLearn es una plataforma interactiva diseñada para el aprendizaje profundo de las rutas metabólicas fundamentales en bioquímica. 
                  Combina teoría avanzada con casos clínicos reales y ejercicios de pensamiento crítico.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Características principales:</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Información detallada de enzimas y energía libre de Gibbs</li>
                    <li>• Casos clínicos con relevancia médica</li>
                    <li>• Ejercicios de pensamiento crítico con evaluación IA</li>
                    <li>• Sistema de notas personalizadas</li>
                    <li>• Mapas visuales interactivos</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="icon-compass mr-3 text-green-600"></div>
                  Guía de Uso
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Selecciona una Ruta Metabólica</h4>
                      <p className="text-gray-600 text-sm">Explora las rutas catabólicas, anabólicas y de transporte disponibles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Navega por las Pestañas</h4>
                      <p className="text-gray-600 text-sm">Utiliza las diferentes secciones: Visión General, Mapa Visual, Casos Clínicos, etc.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Practica y Evalúa</h4>
                      <p className="text-gray-600 text-sm">Completa los ejercicios y utiliza la IA para evaluar tu comprensión.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Toma Notas</h4>
                      <p className="text-gray-600 text-sm">Guarda tus notas, preguntas y recursos para futuras consultas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="icon-users mr-3 text-indigo-600"></div>
                Equipo de Desarrollo
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Centro de Innovación y Transferencia Tecnológica</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {developers.map((developer, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{developer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={onContinue}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-200 font-semibold text-lg"
              >
                <div className="icon-arrow-right mr-2 inline"></div>
                Comenzar Aprendizaje
              </button>
              
              <div className="mt-6">
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  <div className="icon-copy mr-1 inline"></div>
                  Copiar Enlace para Compartir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('WelcomePage component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.WelcomePage = WelcomePage;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.WelcomePage = true;
}

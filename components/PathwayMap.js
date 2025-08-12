function PathwayMap({ pathway }) {
  try {
    const [selectedStep, setSelectedStep] = React.useState(null);
    const [showAnimations, setShowAnimations] = React.useState(true);

    return (
      <div className="bg-white rounded-lg shadow-lg p-6" data-name="pathway-map" data-file="components/PathwayMap.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Mapa Visual: {pathway.name}</h2>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showAnimations}
                onChange={(e) => setShowAnimations(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Animaciones</span>
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
              <div className="icon-map-pin mr-2"></div>
              Localización
            </h3>
            <p className="text-blue-800">{pathway.location}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2 flex items-center">
              <div className="icon-trending-up mr-2"></div>
              ΔG Total
            </h3>
            <p className={`font-bold ${pathway.totalGibbs < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {pathway.totalGibbs} kJ/mol
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2 flex items-center">
              <div className="icon-layers mr-2"></div>
              Reacciones
            </h3>
            <p className="text-purple-800">{pathway.reactions.length} pasos</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Esquema de la Ruta</h3>
          <div className="space-y-4">
            {pathway.reactions.map((reaction, index) => (
              <div 
                key={index}
                className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedStep === index 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                } ${showAnimations ? 'animate-pulse' : ''}`}
                onClick={() => setSelectedStep(selectedStep === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">
                        Paso {index + 1}
                      </span>
                      <h4 className="font-semibold text-gray-900">{reaction.name}</h4>
                    </div>
                    <p className="text-gray-700 font-mono text-sm">{reaction.equation}</p>
                  </div>
                  
                  <div className="text-right ml-4">
                    <div className={`font-bold ${reaction.gibbs < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      ΔG°' = {reaction.gibbs} kJ/mol
                    </div>
                    <div className="text-xs text-gray-500">
                      {reaction.reversible ? 'Reversible' : 'Irreversible'}
                    </div>
                  </div>
                </div>
                
                {selectedStep === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Enzima Catalítica</h5>
                        <p className="text-gray-700 text-sm mb-3">{reaction.enzyme}</p>
                        <h5 className="font-semibold text-gray-800 mb-2">Mecanismo</h5>
                        <p className="text-gray-600 text-sm">{reaction.mechanism}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Regulación</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {reaction.regulation.map((reg, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="icon-arrow-right mr-2 mt-0.5 text-xs"></div>
                              {reg}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                {index < pathway.reactions.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="icon-arrow-down text-white text-sm"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-3 flex items-center">
              <div className="icon-arrow-down-circle mr-2"></div>
              Origen de Precursores
            </h3>
            <ul className="space-y-2">
              {pathway.precursorOrigins?.map((origin, index) => (
                <li key={index} className="text-green-800 text-sm flex items-start">
                  <div className="icon-chevron-right mr-2 mt-0.5 text-xs"></div>
                  {origin}
                </li>
              )) || pathway.precursors.map((precursor, index) => (
                <li key={index} className="text-green-800 text-sm flex items-start">
                  <div className="icon-chevron-right mr-2 mt-0.5 text-xs"></div>
                  {precursor}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-3 flex items-center">
              <div className="icon-arrow-up-circle mr-2"></div>
              Destino de Productos
            </h3>
            <ul className="space-y-2">
              {pathway.productDestinations?.map((destination, index) => (
                <li key={index} className="text-orange-800 text-sm flex items-start">
                  <div className="icon-chevron-right mr-2 mt-0.5 text-xs"></div>
                  {destination}
                </li>
              )) || pathway.products.map((product, index) => (
                <li key={index} className="text-orange-800 text-sm flex items-start">
                  <div className="icon-chevron-right mr-2 mt-0.5 text-xs"></div>
                  {product}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PathwayMap component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.PathwayMap = PathwayMap;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.PathwayMap = true;
}

function PathwayCard(props) {
  const { pathway, onSelect } = props || {};
  
  try {
    const handleClick = () => {
      if (typeof onSelect === 'function' && pathway) {
        onSelect(pathway);
      }
    };

    return (
      <div 
        className="pathway-card p-6 cursor-pointer transform hover:scale-105 transition-transform"
        onClick={handleClick}
        data-name="pathway-card" 
        data-file="components/PathwayCard.js"
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${pathway.color}`}>
            <div className={`${pathway.icon} text-xl text-white`}></div>
          </div>
          <div className="text-right">
            <div className={`text-xs px-2 py-1 rounded-full mb-1 ${
              pathway.type === 'catabolic' ? 'bg-red-100 text-red-700' :
              pathway.type === 'anabolic' ? 'bg-blue-100 text-blue-700' :
              'bg-green-100 text-green-700'
            }`}>
              {pathway.type === 'catabolic' ? '🔻 Catabólica' :
               pathway.type === 'anabolic' ? '🔺 Anabólica' :
               '🚛 Transporte'}
            </div>
            <span className="text-sm text-gray-500">{pathway.reactions.length} reacciones</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pathway.name}</h3>
        <p className="text-gray-600 mb-4">{pathway.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-700">
            <div className="icon-map-pin text-blue-600 mr-2"></div>
            <span><strong>Localización:</strong> {pathway.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-700">
            <div className="icon-zap text-yellow-600 mr-2"></div>
            <span><strong>ΔG total:</strong> 
              <span className={pathway.totalGibbs < 0 ? 'energy-negative' : 'energy-positive'}>
                {pathway.totalGibbs} kJ/mol
              </span>
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {pathway.keyEnzymes.slice(0, 2).map((enzyme, index) => (
              <span key={index} className="enzyme-badge">
                {enzyme}
              </span>
            ))}
            {pathway.keyEnzymes.length > 2 && (
              <span className="text-xs text-gray-500">
                +{pathway.keyEnzymes.length - 2} más
              </span>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PathwayCard component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.PathwayCard = PathwayCard;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.PathwayCard = true;
}

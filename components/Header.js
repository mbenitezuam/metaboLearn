function Header(props) {
  const { currentView, onViewChange } = props || {};
  
  try {
    return (
      <header className="bg-white shadow-sm border-b" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="icon-dna text-xl text-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MetaboLearn</h1>
                <p className="text-sm text-gray-600">Bioquímica Avanzada</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.Header = Header;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.Header = true;
}

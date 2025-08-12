function ErrorBoundary(props) {
  try {
    return props.children;
  } catch (error) {
    console.error('Error in ErrorBoundary:', error);
    return React.createElement('div', {
      className: 'min-h-screen flex items-center justify-center'
    }, React.createElement('div', {
      className: 'text-center text-red-600'
    }, 'Algo salió mal. Por favor recarga la página.'));
  }
}

function App() {
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [currentView, setCurrentView] = React.useState('pathways');
  const [selectedPathway, setSelectedPathway] = React.useState(null);

  const handleContinue = () => {
    setShowWelcome(false);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handlePathwaySelect = (pathway) => {
    setSelectedPathway(pathway);
  };

  const handleBack = () => {
    setSelectedPathway(null);
  };

  if (showWelcome) {
    const WelcomePage = window.WelcomePage;
    if (WelcomePage) {
      return React.createElement(WelcomePage, {
        onContinue: handleContinue
      });
    }
    return React.createElement('div', { 
      className: 'min-h-screen flex items-center justify-center' 
    }, 'Cargando...');
  }

  const Header = window.Header;
  const PathwayCard = window.PathwayCard;
  const PathwayDetail = window.PathwayDetail;

  return React.createElement('div', {
    className: 'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'
  }, [
    Header && React.createElement(Header, {
      key: 'header',
      currentView,
      onViewChange: handleViewChange
    }),
    
    React.createElement('main', {
      key: 'main',
      className: 'container mx-auto px-4 py-8'
    }, [
      currentView === 'pathways' && !selectedPathway && 
      React.createElement('div', {
        key: 'pathways-grid',
        className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
      }, window.pathwayData && PathwayCard ? window.pathwayData.map((pathway, index) => 
        React.createElement(PathwayCard, {
          key: pathway.id || index,
          pathway,
          onSelect: handlePathwaySelect
        })
      ) : [React.createElement('div', { key: 'loading', className: 'col-span-3 text-center' }, 'Cargando rutas metabólicas...')]),
      
      selectedPathway && PathwayDetail && React.createElement(PathwayDetail, {
        key: 'pathway-detail',
        pathway: selectedPathway,
        onBack: handleBack
      })
    ])
  ]);
}

function initApp() {
  // Check if React is properly loaded
  if (!window.isReactReady || !window.isReactReady()) {
    console.log('React not ready, retrying...');
    setTimeout(initApp, 100);
    return;
  }

  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }

  try {
    // Verify React.createElement is available
    if (typeof React.createElement !== 'function') {
      throw new Error('React.createElement is not a function');
    }

    // Create app element safely
    const errorBoundary = React.createElement(ErrorBoundary, null, React.createElement(App));
    
    if (ReactDOM.createRoot && typeof ReactDOM.createRoot === 'function') {
      const root = ReactDOM.createRoot(rootElement);
      root.render(errorBoundary);
    } else if (ReactDOM.render && typeof ReactDOM.render === 'function') {
      ReactDOM.render(errorBoundary, rootElement);
    } else {
      throw new Error('No valid ReactDOM render method found');
    }
  } catch (error) {
    console.error('Render error:', error);
    rootElement.innerHTML = '<div style="padding: 20px; text-align: center; color: red;">Error al cargar la aplicación: ' + error.message + '</div>';
  }
}

// Wait for DOM and then initialize
function startApp() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    // Add small delay to ensure all scripts are loaded
    setTimeout(initApp, 200);
  }
}

startApp();

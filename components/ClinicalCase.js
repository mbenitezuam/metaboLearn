function ClinicalCase({ pathway }) {
  try {
    const [selectedCase, setSelectedCase] = React.useState(0);
    const cases = window.clinicalCases[pathway.id] || [];

    if (cases.length === 0) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6" data-name="clinical-case" data-file="components/ClinicalCase.js">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Casos Clínicos</h2>
          <p className="text-gray-600">No hay casos clínicos disponibles para esta ruta metabólica.</p>
        </div>
      );
    }

    const currentCase = cases[selectedCase];

    return (
      <div className="bg-white rounded-lg shadow-lg p-6" data-name="clinical-case" data-file="components/ClinicalCase.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Casos Clínicos: {pathway.name}</h2>
          <div className="flex space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedCase(index)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedCase === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Caso {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <h3 className="font-semibold text-red-800 mb-2 flex items-center">
            <div className="icon-alert-triangle mr-2"></div>
            {currentCase.title}
          </h3>
          <p className="text-red-700 text-sm">{currentCase.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3">Presentación Clínica</h4>
            <ul className="space-y-2">
              {currentCase.symptoms.map((symptom, index) => (
                <li key={index} className="text-blue-800 text-sm flex items-start">
                  <div className="icon-check mr-2 mt-0.5 text-xs"></div>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-3">Hallazgos de Laboratorio</h4>
            <ul className="space-y-2">
              {currentCase.labFindings.map((finding, index) => (
                <li key={index} className="text-purple-800 text-sm flex items-start">
                  <div className="icon-activity mr-2 mt-0.5 text-xs"></div>
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-yellow-900 mb-3">Impacto Metabólico</h4>
          <p className="text-yellow-800 text-sm leading-relaxed">{currentCase.metabolicImpact}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-3">Estrategias Terapéuticas</h4>
          <ul className="space-y-2">
            {currentCase.treatment.map((treatment, index) => (
              <li key={index} className="text-green-800 text-sm flex items-start">
                <div className="icon-plus mr-2 mt-0.5 text-xs"></div>
                {treatment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ClinicalCase component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.ClinicalCase = ClinicalCase;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.ClinicalCase = true;
}

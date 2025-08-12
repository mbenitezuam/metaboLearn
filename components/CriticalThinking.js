function CriticalThinking({ pathway }) {
  try {
    const [selectedScenario, setSelectedScenario] = React.useState(0);
    const [userAnswer, setUserAnswer] = React.useState('');
    const [showSolution, setShowSolution] = React.useState(false);
    const [aiEvaluation, setAiEvaluation] = React.useState(null);
    const [isEvaluating, setIsEvaluating] = React.useState(false);

    // Ensure pathway and keyEnzymes exist before creating scenarios
    const pathwayName = pathway?.name || 'esta ruta metabólica';
    const firstEnzyme = pathway?.keyEnzymes?.[0] || 'la enzima principal';
    const secondEnzyme = pathway?.keyEnzymes?.[1] || pathway?.keyEnzymes?.[0] || 'la enzima clave';

    const scenarios = [
      {
        title: "¿Qué pasaría si...?",
        question: `¿Qué ocurriría con ${pathwayName} si se inhibiera completamente la enzima ${firstEnzyme}?`,
        context: "Considera los efectos sobre el flujo metabólico, acumulación de sustratos y rutas alternativas.",
        solution: `La inhibición de ${firstEnzyme} causaría: 1) Acumulación del sustrato inicial, 2) Reducción en la producción de productos finales, 3) Activación de rutas metabólicas alternativas, 4) Posibles efectos regulatorios en cascada.`
      },
      {
        title: "Análisis de Mutación",
        question: `Una mutación reduce la actividad de ${secondEnzyme} al 10%. ¿Cómo se adaptaría el metabolismo celular?`,
        context: "Piensa en mecanismos compensatorios y cambios en la expresión génica.",
        solution: "La célula podría: 1) Aumentar la expresión de la enzima mutada, 2) Activar isoformas alternativas, 3) Modificar rutas metabólicas paralelas, 4) Cambiar la localización celular de enzimas relacionadas."
      },
      {
        title: "Estado Fisiológico",
        question: `¿Cómo se modifica ${pathwayName} durante el ayuno prolongado (>24 horas)?`,
        context: "Considera los cambios hormonales y las necesidades energéticas celulares.",
        solution: "Durante el ayuno: 1) Cambios en la regulación hormonal (insulina↓, glucagón↑), 2) Modificación de la actividad enzimática, 3) Cambios en la expresión génica, 4) Adaptaciones metabólicas para preservar glucosa."
      }
    ];

    const currentScenario = scenarios[selectedScenario];

    const handleAIEvaluation = async () => {
      if (!userAnswer || userAnswer.trim().length < 50) {
        alert('Por favor, escribe una respuesta más detallada (mínimo 50 caracteres).');
        return;
      }
      
      setIsEvaluating(true);
      try {
        if (typeof window.invokeAIAgent === 'function') {
          const systemPrompt = `Eres un experto profesor de bioquímica evaluando la respuesta de un estudiante sobre ${pathwayName}. 

Pregunta: ${currentScenario.question}
Contexto: ${currentScenario.context}

Evalúa la respuesta del estudiante considerando:
1. Comprensión de conceptos (30%)
2. Aplicación de conocimientos (30%) 
3. Razonamiento crítico (25%)
4. Claridad de explicación (15%)

Proporciona una puntuación del 1-10 y retroalimentación constructiva específica en español.`;

          const userPrompt = `Respuesta del estudiante: ${userAnswer}`;
          
          const evaluation = await window.invokeAIAgent(systemPrompt, userPrompt);
          setAiEvaluation(evaluation);
        } else {
          setAiEvaluation("Función de evaluación con inteligencia artificial no disponible. Tu respuesta ha sido registrada correctamente.");
        }
      } catch (error) {
        console.error('Error in AI evaluation:', error);
        setAiEvaluation("Error al evaluar la respuesta. Por favor, intenta nuevamente.");
      }
      setIsEvaluating(false);
    };

    const resetScenario = () => {
      setUserAnswer('');
      setShowSolution(false);
      setAiEvaluation(null);
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6" data-name="critical-thinking" data-file="components/CriticalThinking.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Pensamiento Crítico: {pathway.name}</h2>
          <div className="flex space-x-2">
            {scenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedScenario(index);
                  resetScenario();
                }}
                className={`px-3 py-1 rounded text-sm ${
                  selectedScenario === index
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Escenario {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
          <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
            <div className="icon-brain mr-2"></div>
            {currentScenario.title}
          </h3>
          <p className="text-purple-700 mb-3">{currentScenario.question}</p>
          <p className="text-purple-600 text-sm italic">{currentScenario.context}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tu Análisis (mínimo 50 caracteres):
          </label>
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows="6"
            placeholder="Desarrolla tu razonamiento considerando mecanismos moleculares, efectos sistémicos y adaptaciones celulares..."
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {userAnswer.length} caracteres
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          >
            {showSolution ? 'Ocultar' : 'Ver'} Solución Modelo
          </button>
          
          <button
            onClick={handleAIEvaluation}
            disabled={isEvaluating || userAnswer.trim().length < 50}
            className={`px-4 py-2 rounded-lg border flex items-center ${
              !isEvaluating && userAnswer.trim().length >= 50
                ? 'border-purple-600 text-purple-600 hover:bg-purple-50'
                : 'border-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <div className="icon-check-circle mr-2"></div>
            {isEvaluating ? 'Evaluando...' : 'Evaluar con IA'}
          </button>
        </div>

        {showSolution && (
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-green-900 mb-2 flex items-center">
              <div className="icon-lightbulb mr-2"></div>
              Solución Modelo
            </h4>
            <p className="text-green-800 text-sm leading-relaxed">{currentScenario.solution}</p>
          </div>
        )}

        {aiEvaluation && (
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <div className="icon-cpu mr-2"></div>
              Evaluación con IA
            </h4>
            <div className="text-blue-800 text-sm leading-relaxed whitespace-pre-line">{aiEvaluation}</div>
          </div>
        )}

        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">💡 Consejos para el Análisis</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Considera efectos a corto y largo plazo</li>
            <li>• Piensa en mecanismos de regulación alostérica y covalente</li>
            <li>• Evalúa impactos en otras rutas metabólicas</li>
            <li>• Considera adaptaciones evolutivas y compensaciones</li>
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CriticalThinking component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.CriticalThinking = CriticalThinking;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.CriticalThinking = true;
}

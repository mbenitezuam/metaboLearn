function TimedPractice({ pathway }) {
  try {
    const [isActive, setIsActive] = React.useState(false);
    const [timeLeft, setTimeLeft] = React.useState(1800); // 30 minutes
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [answers, setAnswers] = React.useState({});
    const [showResults, setShowResults] = React.useState(false);
    const [examQuestions, setExamQuestions] = React.useState([]);

    React.useEffect(() => {
      if (pathway && pathway.quiz) {
        const allQuestions = [...pathway.quiz];
        const shuffled = allQuestions.sort(() => 0.5 - Math.random());
        setExamQuestions(shuffled.slice(0, Math.min(10, shuffled.length)));
      }
    }, [pathway]);

    React.useEffect(() => {
      let interval = null;
      if (isActive && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        finishExam();
      }
      return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const startExam = () => {
      setIsActive(true);
      setCurrentQuestion(0);
      setAnswers({});
      setShowResults(false);
      setTimeLeft(1800);
    };

    const finishExam = () => {
      setIsActive(false);
      setShowResults(true);
    };

    const handleAnswer = (questionIndex, answerIndex) => {
      setAnswers({
        ...answers,
        [questionIndex]: answerIndex
      });
    };

    const calculateScore = () => {
      let correct = 0;
      examQuestions.forEach((question, index) => {
        if (answers[index] === question.correct) {
          correct++;
        }
      });
      return { correct, total: examQuestions.length };
    };

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    if (examQuestions.length === 0) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Examen Cronometrado</h2>
          <p className="text-gray-600">No hay preguntas disponibles para esta ruta metabólica.</p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-lg p-6" data-name="timed-practice" data-file="components/TimedPractice.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Examen Cronometrado: {pathway.name}</h2>
          {isActive && (
            <div className={`text-2xl font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-blue-600'}`}>
              <div className="icon-clock inline mr-2"></div>
              {formatTime(timeLeft)}
            </div>
          )}
        </div>

        {!isActive && !showResults && (
          <div className="text-center">
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Instrucciones del Examen</h3>
              <ul className="text-blue-800 text-left space-y-2 max-w-2xl mx-auto">
                <li>• Duración: 30 minutos</li>
                <li>• Número de preguntas: {examQuestions.length}</li>
                <li>• Solo una respuesta correcta por pregunta</li>
                <li>• No puedes regresar a preguntas anteriores</li>
                <li>• El examen se enviará automáticamente al terminar el tiempo</li>
              </ul>
            </div>
            <button
              onClick={startExam}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-lg"
            >
              <div className="icon-play mr-2 inline"></div>
              Iniciar Examen
            </button>
          </div>
        )}

        {isActive && !showResults && (
          <div>
            <div className="mb-4">
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span>Pregunta {currentQuestion + 1} de {examQuestions.length}</span>
                <span>{Object.keys(answers).length} respondidas</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / examQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {examQuestions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {examQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion, index)}
                    className={`w-full p-3 text-left border rounded-lg transition-colors ${
                      answers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentQuestion === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <div className="icon-arrow-left mr-2 inline"></div>
                Anterior
              </button>

              {currentQuestion < examQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Siguiente
                  <div className="icon-arrow-right ml-2 inline"></div>
                </button>
              ) : (
                <button
                  onClick={finishExam}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  <div className="icon-check mr-2 inline"></div>
                  Finalizar Examen
                </button>
              )}
            </div>
          </div>
        )}

        {showResults && (
          <div className="text-center">
            <div className="mb-6">
              {(() => {
                const { correct, total } = calculateScore();
                const percentage = Math.round((correct / total) * 100);
                return (
                  <div>
                    <div className="text-4xl mb-4">
                      {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Examen Completado!</h3>
                    <p className="text-xl text-gray-700 mb-4">
                      Puntuación: {correct}/{total} ({percentage}%)
                    </p>
                    <div className={`inline-block px-4 py-2 rounded-lg ${
                      percentage >= 80 ? 'bg-green-100 text-green-800' :
                      percentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {percentage >= 80 ? 'Excelente' : percentage >= 60 ? 'Aprobado' : 'Necesita Mejorar'}
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="space-x-4">
              <button
                onClick={() => {
                  setIsActive(false);
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setTimeLeft(1800);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Nuevo Examen
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('TimedPractice component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.TimedPractice = TimedPractice;
}

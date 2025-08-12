function Quiz({ pathway }) {
  try {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [showResult, setShowResult] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);

    const questions = pathway.quiz;

    const handleAnswer = (answerIndex) => {
      setSelectedAnswer(answerIndex);
      setShowResult(true);
      
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestion] = answerIndex;
      setSelectedAnswers(newSelectedAnswers);
      
      if (answerIndex === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    };

    const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    };

    const resetQuiz = () => {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
      setSelectedAnswers([]);
    };

    const isQuizComplete = currentQuestion === questions.length - 1 && showResult;

    return (
      <div className="bg-white rounded-lg shadow-lg p-6" data-name="quiz" data-file="components/Quiz.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Ejercicios: {pathway.name}
          </h2>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
            <span>Puntuación: {score}/{questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {!isQuizComplete ? (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={`quiz-option w-full text-left ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? 'quiz-correct'
                        : selectedAnswer === index
                        ? 'quiz-incorrect'
                        : 'border-gray-300'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300'
                  }`}
                >
                  <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mb-6">
                <div className={`p-4 rounded-lg ${
                  selectedAnswer === questions[currentQuestion].correct 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <p className={`font-medium ${
                    selectedAnswer === questions[currentQuestion].correct 
                      ? 'text-green-800' 
                      : 'text-red-800'
                  }`}>
                    {selectedAnswer === questions[currentQuestion].correct 
                      ? '¡Correcto!' 
                      : 'Incorrecto'}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>

                <button
                  onClick={nextQuestion}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="text-4xl mb-4">
                {score === questions.length ? '🎉' : score >= questions.length * 0.7 ? '👏' : '📚'}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ¡Quiz Completado!
              </h3>
              <p className="text-xl text-gray-700">
                Tu puntuación: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
              </p>
            </div>

            <div className="space-x-4">
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Repetir Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Quiz component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.Quiz = Quiz;
  window.componentLoaded = window.componentLoaded || {};
  window.componentLoaded.Quiz = true;
}

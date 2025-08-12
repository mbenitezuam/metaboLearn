function AchievementSystem() {
  try {
    const [achievements, setAchievements] = React.useState([]);
    const [showNotification, setShowNotification] = React.useState(false);
    const [newAchievement, setNewAchievement] = React.useState(null);

    const achievementTemplates = [
      { id: 'first_quiz', name: 'Primer Evaluador', description: 'Completa tu primer quiz', icon: '🎯', points: 10 },
      { id: 'pathway_master', name: 'Maestro de Rutas', description: 'Estudia 5 rutas metabólicas', icon: '🧬', points: 25 },
      { id: 'speed_learner', name: 'Aprendiz Veloz', description: 'Completa un examen en menos de 15 minutos', icon: '⚡', points: 20 },
      { id: 'note_taker', name: 'Tomador de Notas', description: 'Crea 10 notas personales', icon: '📝', points: 15 },
      { id: 'perfect_score', name: 'Puntuación Perfecta', description: 'Obtén 100% en un quiz', icon: '🏆', points: 30 }
    ];

    React.useEffect(() => {
      loadAchievements();
      checkForNewAchievements();
    }, []);

    const loadAchievements = async () => {
      try {
        if (typeof trickleListObjects === 'function') {
          const response = await trickleListObjects('user_achievements', 50, true);
          setAchievements(response.items || []);
        }
      } catch (error) {
        console.error('Error loading achievements:', error);
      }
    };

    const checkForNewAchievements = async () => {
      try {
        if (typeof trickleListObjects === 'function') {
          const quizResults = await trickleListObjects('quiz_results', 10, true);
          const notes = await trickleListObjects('pathway_notes', 20, true);
          
          for (const template of achievementTemplates) {
            const hasAchievement = achievements.some(a => a.objectData.achievement_id === template.id);
            if (!hasAchievement && shouldUnlockAchievement(template, quizResults.items, notes.items)) {
              await unlockAchievement(template);
            }
          }
        }
      } catch (error) {
        console.error('Error checking achievements:', error);
      }
    };

    const shouldUnlockAchievement = (template, quizResults, notes) => {
      switch (template.id) {
        case 'first_quiz':
          return quizResults.length > 0;
        case 'note_taker':
          return notes.length >= 10;
        case 'perfect_score':
          return quizResults.some(r => r.objectData.percentage === 100);
        default:
          return false;
      }
    };

    const unlockAchievement = async (template) => {
      try {
        if (typeof trickleCreateObject === 'function') {
          await trickleCreateObject('user_achievements', {
            achievement_id: template.id,
            name: template.name,
            description: template.description,
            icon: template.icon,
            points: template.points,
            unlocked_at: new Date().toISOString()
          });
          
          setNewAchievement(template);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 5000);
          await loadAchievements();
        }
      } catch (error) {
        console.error('Error unlocking achievement:', error);
      }
    };

    if (!showNotification) return null;

    return (
      <div className="fixed top-4 right-4 z-50 bg-yellow-100 border border-yellow-400 rounded-lg p-4 shadow-lg animate-bounce">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{newAchievement?.icon}</div>
          <div>
            <h4 className="font-bold text-yellow-800">¡Nuevo Logro!</h4>
            <p className="text-yellow-700 text-sm">{newAchievement?.name}</p>
            <p className="text-yellow-600 text-xs">+{newAchievement?.points} puntos</p>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className="text-yellow-600 hover:text-yellow-800"
          >
            <div className="icon-x text-sm"></div>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AchievementSystem component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.AchievementSystem = AchievementSystem;
}

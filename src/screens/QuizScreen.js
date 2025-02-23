import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useProgress } from '../components/ProgressContext';




export default function QuizScreen({ route, navigation }) {
  
   // Marrim të dhënat e quiz-it nga parametri i route
   const { quiz } = route.params;

   if (!quiz) {
     // Nëse quiz nuk është i disponueshëm, mund të shfaqim një mesazh gabimi ose të drejtojmë përdoruesin diku tjetër
     return <Text style={styles.errorText}>Quiz data is missing!</Text>;
   }


  // Marrim progresin aktual të përdoruesit dhe funksionin për ta ruajtur atë
  const { progress, saveProgress } = useProgress(); 
  const [currentQuestion, setCurrentQuestion] = useState(0);   //për të ruajtur pyetjen aktuale
  const [score, setScore] = useState(0);                      //për të mbajtur rezultatin e kuizit
  const [showResults, setShowResults] = useState(false);     //për të treguar rezultatet pasi përfundon kuizi

    // Funksioni që trajton përgjigjet e përdoruesit
  const handleAnswer = (index) => {
    if (!showResults) {
      // Kontrollon nëse përgjigja është e saktë
      const isCorrect = quiz.questions[currentQuestion].correctAnswers.includes(index);  
      if (isCorrect) setScore(score + 1);

      // Nëse ka më shumë pyetje, kalon në pyetjen tjetër
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
         // Nëse është pyetja e fundit, tregon rezultatet dhe ruan progresin
        setShowResults(true);

        // Ruajmë progresin e përdoruesit me rezultatet e kuizit
        const newProgress = {
          ...progress,
          completedQuizzes: {
            ...progress.completedQuizzes,
            [quiz.id]: true, // p.sh. "js1": true
          },
          scores: {
            ...progress.scores,
            [quiz.id]: score + (isCorrect ? 1 : 0), // ruajmë pikët për këtë quiz
          },
        };
        saveProgress(newProgress);
      }
    }
  };

  return (
    <View style={styles.container}>
          {/* Titulli i kuizit */}
      <Text style={styles.title}>{quiz.title}</Text>


      {/* Nëse kuizi ka përfunduar, shfaq rezultatet */}
      {showResults ? (
        <View style={styles.results}>
          <Text style={styles.score}>
            Score: {score}/{quiz.questions.length}
          </Text>

          {/* Buton për t'u kthyer te tutorialet */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back to Tutorials</Text>
          </TouchableOpacity>
        </View>
      ) : (

        // Nëse kuizi është ende duke u zhvilluar, shfaq pyetjen aktuale
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>
            Question {currentQuestion + 1}/{quiz.questions.length}
          </Text>


          {/* Teksti i pyetjes aktuale */}
          <Text style={styles.questionText}>
            {quiz.questions[currentQuestion].question}
          </Text>

          {/* Opsionet e përgjigjeve si butona të klikueshëm */}
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',  // Ndryshim i sfondit për më shumë ngjyrë
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  questionNumber: {
    fontSize: 18,
    color: '#7F8C8D',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#34495E',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#4682B4',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 8,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Hije për efektin e butë të butonave
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
  },
  results: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#27AE60',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E74C3C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
  },
});

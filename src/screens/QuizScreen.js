import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function QuizScreen({ route, navigation }) {
  const { quiz } = route.params;

  const { progress, saveProgress } = useProgress(); // MERR context-in
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index) => {
    if (!showResults) {
      const isCorrect = quiz.questions[currentQuestion].correctAnswers.includes(index);
      if (isCorrect) setScore(score + 1);

      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);

        // RUAN progresin
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
      <Text style={styles.title}>{quiz.title}</Text>

      {showResults ? (
        <View style={styles.results}>
          <Text style={styles.score}>
            Score: {score}/{quiz.questions.length}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back to Tutorials</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>
            Question {currentQuestion + 1}/{quiz.questions.length}
          </Text>

          <Text style={styles.questionText}>
            {quiz.questions[currentQuestion].question}
          </Text>

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

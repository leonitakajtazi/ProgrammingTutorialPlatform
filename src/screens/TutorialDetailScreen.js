import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

// Importet e quiz-eve dhe ushtrimeve
import { javascriptQuizzes } from '../data/quizzes';
import { javascriptExercises } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  // Marrim objektin "tutorial" nga parametri i navigimit (nëse përdoret)
  const { tutorial } = route.params;

  // Përmbajtja HTML me stil të përmirësuar
  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #ECF0F1; color: #2C3E50; }
          h1 { color: #3498DB; text-align: center; }
          p { font-size: 16px; line-height: 1.6; }
          pre {
            background: #2C3E50;
            color: #ECF0F1;
            padding: 12px;
            border-radius: 8px;
            overflow-x: auto;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <h1>${tutorial?.title || 'Default Tutorial Title'}</h1>
        <p>This is an example tutorial detail.</p>
        <pre>
function greet() {
  console.log("Hello, World!");
}
        </pre>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      {/* Butonat e personalizuar për quiz dhe ushtrime */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#3498DB' }]} 
          onPress={() => navigation.navigate('Quiz', { quiz: javascriptQuizzes[0] })}
        >
          <Ionicons name="help-circle-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#2ECC71' }]} 
          onPress={() => navigation.navigate('Exercise', { exercise: javascriptExercises[0] })}
        >
          <Ionicons name="code-slash-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Practice Exercise</Text>
        </TouchableOpacity>
      </View>

      {/* WebView për tutorialin */}
      <WebView 
        originWhitelist={['*']} 
        source={{ html: htmlContent }} 
        style={styles.webview} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1', // Ngjyrë e hapur për sfondin
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#4682B4',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  webview: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});


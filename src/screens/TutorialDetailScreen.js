import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

// Importet e quiz-eve dhe ushtrimeve
import { javascriptQuizzes } from '../data/quizzes';
import { exercises } from '../data/exercises'; 
export default function TutorialDetailScreen({ route, navigation }) {
  const { tutorial, quizId, exerciseId } = route.params;

  // Merr quiz dhe ushtrimet përkatëse nga ID-të
  const quiz = javascriptQuizzes.find(q => q.id === quizId);
  const exercise = exercises.find(e => e.id === exerciseId);
  
  // Përmbajtja HTML si shembull
  const htmlContent = tutorial?.category === 'Web Development' ? `
  <html>
    <head>
      <style>
        body {
          font-family: 'Helvetica Neue', sans-serif;
          padding: 30px;
          background-color: #f9f9f9;
          font-size: 18px; /* Fonti i rritur për lexim më të mirë */
          line-height: 1.6;
          color: #2c3e50;
        }
        h1 {
          color: #34495e;
          font-size: 36px; /* Rritur madhësia e titullit */
          font-weight: bold;
          margin-bottom: 20px;
        }
        p {
          font-size: 20px;
          color: #2c3e50;
          margin-bottom: 20px;
        }
        pre {
          background: #ecf0f1;
          padding: 20px;
          border-radius: 8px;
          font-size: 16px; /* Fonti i rritur për kodin */
          margin-top: 20px;
          overflow-x: auto;
        }
        /* Krijimi i media queries për ekranet e vogla */
        @media (max-width: 768px) {
          body {
            font-size: 16px; /* Rritje e lexueshmërisë në mobile */
            padding: 20px;
          }
          h1 {
            font-size: 30px; /* Titulli më i vogël në ekranet mobile */
          }
          pre {
            font-size: 14px; /* Rritja e madhësisë së kodit për ekrane të vogla */
          }
        }
      </style>
    </head>
    <body>
      <h1>${tutorial?.title || 'Responsive Web Design'}</h1>
      <p>This course focuses on responsive web design techniques that help create websites that work across various screen sizes and devices. You will learn about media queries, flexible layouts, and more.</p>
      <pre>
/* Example of a media query */
@media (max-width: 768px) {
  body {
    font-size: 16px;
    padding: 15px;
  }
  h1 {
    font-size: 28px;
  }
  pre {
    font-size: 14px;
  }
}
      </pre>
    </body>
  </html>
` : `
  <html>
    <head>
      <style>
        body {
          font-family: 'Helvetica Neue', sans-serif;
          padding: 30px;
          background-color: #f9f9f9;
          font-size: 18px;
          line-height: 1.6;
        }
        h1 {
          color: #34495e;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        p {
          font-size: 20px;
          color: #2c3e50;
          margin-bottom: 20px;
        }
        pre {
          background: #ecf0f1;
          padding: 20px;
          border-radius: 8px;
          font-size: 16px;
          margin-top: 20px;
          overflow-x: auto;
        }
      </style>
    </head>
    <body>
      <h1>${tutorial?.title || 'Default Course Title'}</h1>
      <p>This is a generic tutorial.</p>
      <pre>
function example() {
  console.log("Example function");
}
      </pre>
    </body>
  </html>
`;


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{tutorial?.title}</Text>

      <Text style={styles.description}>{tutorial?.description}</Text>

      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.quizButton]}
          onPress={() => navigation.navigate('Quiz', { quiz: quiz })}
        >
          <Text style={styles.buttonText}>Take Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.exerciseButton]}
          onPress={() => navigation.navigate('Exercise', { exercise: exercise, exercisesList: exercises })}          
        >
        
          <Text style={styles.buttonText}>Try Exercise</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    lineHeight: 22,
  },
  webview: {
    height: 280,
    marginBottom: 30,
    borderRadius: 10,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 14,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7f8c8d',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  quizButton: {
    backgroundColor: '#27ae60', 
  },
  exerciseButton: {
    backgroundColor: '#e67e22', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

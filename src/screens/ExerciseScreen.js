import React, { useState, useEffect } from 'react';   // Importimi i React dhe funksioneve useState dhe useEffect për të menaxhuar gjendjen dhe efektet anësore.
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';  // Importimi i komponentëve të nevojshëm nga React Native për UI.


export default function ExerciseScreen({ route, navigation }) {
  const { exercise, exercisesList } = route.params;

  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const filteredExercises = exercisesList.filter((ex) => ex.category === exercise.category);

  useEffect(() => {
      setCode('');
      setResult('');
  }, [exercise]);

  const checkSolution = () => {
      const cleanCode = code.replace(/\s/g, '');
      const cleanSolution = exercise.solution.replace(/\s/g, '');

      if (cleanCode === cleanSolution) {
          setResult('Correct! 🎉');
          const currentIndex = filteredExercises.findIndex((ex) => ex.id === exercise.id);
          if (currentIndex === -1) {
              setResult('Error: Current exercise not found!');
              return;
          }

          const nextExercise = filteredExercises[currentIndex + 1];
          if (nextExercise) {
              navigation.navigate('Exercise', {
                  exercise: nextExercise,
                  exercisesList: exercisesList,
              });
          } else {
              setResult('You have completed all exercises! 🎉');
          }
      } else {
          setResult('Incorrect solution. Please try again!');
      }
  };

  // Sigurohuni që `result` është gjithmonë një string valid për shfaqje
  const renderResult = result ? <Text style={styles.result}>{result}</Text> : null;

  return (
      <View style={styles.container}>
          <Text style={styles.title}>{exercise?.title}</Text>
          <Text style={styles.description}>{exercise?.description}</Text>

          <TextInput
              style={styles.codeInput}
              multiline
              placeholder="Write your code here..."
              value={code}
              onChangeText={setCode}
              autoCapitalize="none"
              autoCorrect={false}
              fontFamily="monospace"
          />

          <TouchableOpacity style={styles.button} onPress={checkSolution}>
              <Text style={styles.buttonText}>Check Solution</Text>
          </TouchableOpacity>

          {/* Shfaqim rezultatin nëse ekziston */}
          {renderResult}
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    codeInput: {
        height: 120,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        fontFamily: 'monospace',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
});

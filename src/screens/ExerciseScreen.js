import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { allExercises } from '../data/exercises'; // Make sure this import is correct

export default function ExerciseScreen({ route, navigation }) {
  const { exercise, exercisesList } = route.params;

  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  // Reset code and result when the exercise changes
  useEffect(() => {
    setCode('');
    setResult('');
  }, [exercise]);

  const checkSolution = () => {
    const cleanCode = code.replace(/\s/g, ''); // Remove spaces for comparison
    const cleanSolution = exercise.solution.replace(/\s/g, ''); // Remove spaces from solution

    if (cleanCode === cleanSolution) {
      setResult('Correct! 🎉');

      // Get the index of the current exercise from allExercises
      const currentIndex = allExercises.findIndex((ex) => ex.id === exercise.id);

      if (currentIndex === -1) {
        setResult('Error: Current exercise not found!');
        return; // Exit if exercise is not found
      }

      // Get the next exercise, if there is one
      const nextExercise = allExercises[currentIndex + 1];

      if (nextExercise) {
        navigation.navigate('ExerciseScreen', {
          exercise: nextExercise,
          exercisesList: exercisesList, // Pass the list of exercises
        });
      } else {
        setResult('You have completed all exercises! 🎉');
      }
    } else {
      setResult('Incorrect solution. Please try again!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.description}>{exercise.description}</Text>

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

      {result && <Text style={styles.result}>{result}</Text>}
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

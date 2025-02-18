import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExerciseScreen({ route, navigation }) {
  const { exercise, exercisesList } = route.params;

  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  // Filtrimi i ushtrimeve përkatëse sipas kategorisë
  const filteredExercises = exercisesList.filter((ex) => ex.category === exercise.category);

  // Reset kodin dhe rezultatin kur ushtrimi ndryshon
  useEffect(() => {
    setCode('');
    setResult('');
  }, [exercise]);

  const checkSolution = () => {
    const cleanCode = code.replace(/\s/g, ''); // Hiq hapësirat për krahasim
    const cleanSolution = exercise.solution.replace(/\s/g, ''); // Hiq hapësirat nga zgjidhja
  
    console.log('Current Exercise ID:', exercise.id); // Log ID i ushtrimit aktual
    console.log('Filtered Exercises:', filteredExercises); // Log lista e ushtrimeve të filtruar
  
    if (cleanCode === cleanSolution) {
      setResult('Correct! 🎉');
  
      // Gjej indeksin e ushtrimit aktual në listën e filtruar
      const currentIndex = filteredExercises.findIndex((ex) => ex.id === exercise.id);
      console.log('Current Exercise Index:', currentIndex); // Log indeksin që po kërkoni
  
      if (currentIndex === -1) {
        setResult('Error: Current exercise not found!');
        return;
      }
  
      // Gjej ushtrimin e radhës në listën e filtruar
      const nextExercise = filteredExercises[currentIndex + 1];
  
      if (nextExercise) {
        // Navigo në ushtrimin e radhës
        navigation.navigate('Exercise', {
          exercise: nextExercise,
          exercisesList: exercisesList, // Dërgo të gjithë listën e ushtrimeve
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

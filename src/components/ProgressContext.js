// /src/components/ProgressContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Krijo një Context që do të përdoret për të ndarë të dhënat e progresit në gjithë aplikacionin.
const ProgressContext = createContext();

// Krijo një Provider që do të mbajë dhe shpërndajë progresin për komponentët fëmijë.
export function ProgressProvider({ children }) {

    // Përdorim useState për të menaxhuar progresin në nivel lokal.
  const [progress, setProgress] = useState({
    completedQuizzes: {},   // Shënon quiz-et që janë përfunduar. P.sh., { "js1": true, "js2": true }
    completedTutorials: [], // Lista e tutorialeve të përfunduar. P.sh., ["Introduction to RN", "JavaScript Basics"]
    scores: {},             // Rezultatet e quiz-eve. P.sh., { "js1": 4, "js2": 3 }
  });


    // useEffect përdoret për të ngarkuar progresin kur komponenti është ngarkuar për herë të parë.
  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem('@progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));      // I kthen progresin e ruajtur në formatin origjinal.
      }
    } catch (e) {
      console.error('Failed to load progress:', e);     // Nëse ndodhi një gabim, e regjistrojmë.
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem('@progress', JSON.stringify(newProgress));           // Ruajmë progresin si string JSON.
      setProgress(newProgress);
    } catch (e) {
      console.error('Failed to save progress:', e);          // Nëse ndodhi një gabim, e regjistrojmë.
    }
  };

  // Kthejmë Provider-in që ndan progresin dhe funksionin për ta përditësuar atë nëpërmjet context.
  return (
    <ProgressContext.Provider value={{ progress, saveProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

// Krijo një hook që mund të përdoret për të marrë dhe përditësuar progresin në komponentë të tjerë.
export function useProgress() {
  return useContext(ProgressContext);    // Përdorim useContext për të marrë vlerat nga ProgressContext.
}
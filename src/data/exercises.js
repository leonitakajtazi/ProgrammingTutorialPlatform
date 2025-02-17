// JavaScript Exercises
export const javascriptExercises = [
  {
    id: 'ex1',
    title: 'Hello World Function',
    description: 'Create a function that returns "Hello World!"',
    solution: 'function hello() { return "Hello World!"; }'
  },
  {
    id: 'ex2',
    title: 'Sum of Two Numbers',
    description: 'Create a function that takes two numbers and returns their sum.',
    solution: 'function sum(a, b) { return a + b; }'
  },
  {
    id: 'ex3',
    title: 'Factorial Calculation',
    description: 'Create a function that calculates the factorial of a number.',
    solution: 'function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }'
  },
  {
    id: 'ex4',
    title: 'Palindrome Checker',
    description: 'Create a function that checks if a string is a palindrome.',
    solution: 'function isPalindrome(str) { return str === str.split("").reverse().join(""); }'
  }
];

// HTML Exercises
export const htmlExercises = [
  {
    id: 'ex5',
    title: 'Create a Basic HTML Page',
    description: 'Build an HTML page with a heading, paragraph, and an image.',
    solution: '<!DOCTYPE html><html><head><title>Simple Page</title></head><body><h1>Welcome!</h1><p>This is a simple page.</p><img src="example.jpg" alt="Example Image"></body></html>'
  }
];

// CSS Exercises
export const cssExercises = [
  {
    id: 'ex6',
    title: 'CSS Styling for Buttons',
    description: 'Create a button with custom CSS styles (background, padding, border-radius).',
    solution: 'button { background-color: #4CAF50; padding: 14px 20px; border-radius: 8px; color: white; border: none; cursor: pointer; }'
  },
  {
    id: 'ex7',
    title: 'Responsive Web Design',
    description: 'Create a webpage that adjusts its layout based on screen size using CSS media queries.',
    solution: '@media screen and (max-width: 600px) { body { font-size: 14px; } }'
  }
];

// React Native Exercises
export const reactNativeExercises = [
  {
    id: 'ex8',
    title: 'Create a Simple React Native App',
    description: 'Build a basic app that displays "Hello, React Native!" on the screen.',
    solution: 'import React from "react"; import { Text, View } from "react-native"; const App = () => { return <View><Text>Hello, React Native!</Text></View>; }; export default App;'
  },
  {
    id: 'ex9',
    title: 'State Management with useState',
    description: 'Create a React Native app where a button toggles the text between "On" and "Off".',
    solution: 'import React, { useState } from "react"; import { Button, Text, View } from "react-native"; const App = () => { const [isOn, setIsOn] = useState(false); return <View><Button title="Toggle" onPress={() => setIsOn(!isOn)} /><Text>{isOn ? "On" : "Off"}</Text></View>; }; export default App;'
  }
];

// Tutorials List (with category and icon)
const tutorials = [
  { id: 'js1', title: 'JavaScript Basics', category: 'JavaScript', icon: 'logo-javascript', quizId: 'js1', exerciseId: 'ex1' },
  { id: 'wd1', title: 'HTML Basics', category: 'HTML', icon: 'logo-html5', quizId: 'wd1', exerciseId: 'ex5' },
  { id: 'wd2', title: 'CSS Styling', category: 'CSS', icon: 'logo-css3', quizId: 'wd2', exerciseId: 'ex6' },
  { id: 'rn1', title: 'React Native Basics', category: 'React Native', icon: 'logo-react', quizId: 'rn1', exerciseId: 'ex8' }
];

// All Exercises

export const exercises = {
  ...javascriptExercises,
  ...htmlExercises,
  ...cssExercises,
  ...reactNativeExercises,
  // Mund të shtoni edhe kategori të tjera këtu
};
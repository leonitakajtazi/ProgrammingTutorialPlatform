// JavaScript Exercises
export const javascriptExercises = [
  {
    id: 'ex1',
    title: 'Hello World Function',
    description: 'Create a function that returns "Hello World!"',
    solution: 'function hello() { return "Hello World!"; }',
    category: 'JavaScript'
  },
  {
    id: 'ex2',
    title: 'Sum of Two Numbers',
    description: 'Create a function that takes two numbers and returns their sum.',
    solution: 'function sum(a, b) { return a + b; }',
    category: 'JavaScript'

  },
  {
    id: 'ex3',
    title: 'Factorial Calculation',
    description: 'Create a function that calculates the factorial of a number.',
    solution: 'function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }',
    category: 'JavaScript'

  },
  {
    id: 'ex4',
    title: 'Palindrome Checker',
    description: 'Create a function that checks if a string is a palindrome.',
    solution: 'function isPalindrome(str) { return str === str.split("").reverse().join(""); }',
    category: 'JavaScript'

  }
];

// HTML Exercises
export const htmlExercises = [
  // Ushtrimet ekzistuese
  {
    id: 'ex5',
    title: 'Create a Basic HTML Page',
    description: 'Build an HTML page with a heading, paragraph, and an image.',
    solution: '<!DOCTYPE html><html><head><title>Simple Page</title></head><body><h1>Welcome!</h1><p>This is a simple page.</p><img src="example.jpg" alt="Example Image"></body></html>',
    category: 'HTML'
  },
  // Ushtrime të reja
  {
    id: 'ex6',
    title: 'Create an HTML Form',
    description: 'Create an HTML form with input fields for name, email, and a submit button.',
    solution: '<form><label for="name">Name:</label><input type="text" id="name"><label for="email">Email:</label><input type="email" id="email"><button type="submit">Submit</button></form>',
    category: 'HTML'
  },
  {
    id: 'ex7',
    title: 'Add Links and Images',
    description: 'Create a webpage that contains links and images.',
    solution: '<a href="https://www.example.com">Visit Example</a><img src="example.jpg" alt="Example Image">',
    category: 'HTML'
  }
];


// CSS Exercises
export const cssExercises = [
  // Ushtrimet ekzistuese
  {
    id: 'ex8',
    title: 'CSS Styling for Buttons',
    description: 'Create a button with custom CSS styles (background, padding, border-radius).',
    solution: 'button { background-color: #4CAF50; padding: 14px 20px; border-radius: 8px; color: white; border: none; cursor: pointer; }',
    category: 'CSS'
  },
  {
    id: 'ex9',
    title: 'Responsive Web Design',
    description: 'Create a webpage that adjusts its layout based on screen size using CSS media queries.',
    solution: '@media screen and (max-width: 600px) { body { font-size: 14px; } }',
    category: 'CSS'
  },
  // Ushtrime të reja
  {
    id: 'ex10',
    title: 'Centering a Div',
    description: 'Create a div element and center it both horizontally and vertically using CSS.',
    solution: 'div { width: 200px; height: 200px; background-color: #4CAF50; margin: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }',
    category: 'CSS'
  },
  {
    id: 'ex11',
    title: 'CSS Grid Layout',
    description: 'Create a 2x2 grid layout using CSS Grid.',
    solution: '.container { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }',
    category: 'CSS'
  }
];

// React Native Exercises
export const reactNativeExercises = [
  // Ushtrimet ekzistuese
  {
    id: 'ex12',
    title: 'Create a Simple React Native App',
    description: 'Build a basic app that displays "Hello, React Native!" on the screen.',
    solution: 'import React from "react"; import { Text, View } from "react-native"; const App = () => { return <View><Text>Hello, React Native!</Text></View>; }; export default App;',
    category: 'React Native'
  },
  {
    id: 'ex13',
    title: 'State Management with useState',
    description: 'Create a React Native app where a button toggles the text between "On" and "Off".',
    solution: 'import React, { useState } from "react"; import { Button, Text, View } from "react-native"; const App = () => { const [isOn, setIsOn] = useState(false); return <View><Button title="Toggle" onPress={() => setIsOn(!isOn)} /><Text>{isOn ? "On" : "Off"}</Text></View>; }; export default App;',
    category: 'React Native'
  },
  // Ushtrime të reja
  {
    id: 'ex14',
    title: 'Create a Counter App',
    description: 'Build a counter app where a button increments a number.',
    solution: 'import React, { useState } from "react"; import { Button, Text, View } from "react-native"; const CounterApp = () => { const [count, setCount] = useState(0); return <View><Button title="Increment" onPress={() => setCount(count + 1)} /><Text>Count: {count}</Text></View>; }; export default CounterApp;',
    category: 'React Native'
  },
  {
    id: 'ex15',
    title: 'Display an Image in React Native',
    description: 'Create a React Native app that displays an image from a URL.',
    solution: 'import React from "react"; import { Image, View } from "react-native"; const App = () => { return <View><Image source={{ uri: "https://example.com/image.jpg" }} style={{ width: 100, height: 100 }} /></View>; }; export default App;',
    category: 'React Native'
  }
];


// Tutorials List (with category and icon)
const tutorials = [
  { id: 'js1', title: 'JavaScript Basics', category: 'JavaScript', icon: 'logo-javascript', quizId: 'js1', exerciseId: 'ex1' },
  { id: 'wd1', title: 'HTML Basics', category: 'HTML', icon: 'logo-html5', quizId: 'wd1', exerciseId: 'ex5' },
  { id: 'wd2', title: 'CSS Styling', category: 'CSS', icon: 'logo-css3', quizId: 'wd2', exerciseId: 'ex8' },
  { id: 'rn1', title: 'React Native Basics', category: 'React Native', icon: 'logo-react', quizId: 'rn1', exerciseId: 'ex12' }
];

// All Exercises

export const exercises = [
  ...javascriptExercises,
  ...htmlExercises,
  ...cssExercises,
  ...reactNativeExercises,
];

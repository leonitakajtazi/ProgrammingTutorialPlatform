import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Për ikona moderne

import HomeScreen from '../screens/HomeScreen';
import TutorialsScreen from '../screens/TutorialsScreen';
import TutorialDetailScreen from '../screens/TutorialDetailScreen';
import QuizScreen from '../screens/QuizScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProgressScreen from '../screens/ProgressScreen';
import LearningMaterials from '../screens/LearningMaterials'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack për tutorialet
const TutorialStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3498db',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
  
    <Stack.Screen name="TutorialsScreen" component={TutorialsScreen} options={{ title: 'Tutorials' }} />
    <Stack.Screen name="TutorialDetail" component={TutorialDetailScreen} options={{ title: 'Tutorial Details' }} />
    <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz' }} />
    <Stack.Screen name="Exercise" component={ExerciseScreen} options={{ title: 'Exercises' }} />
    <Stack.Screen name="LearningMaterials"   component={LearningMaterials} options={{ title: 'Learning Materials'}}  />

  </Stack.Navigator>
);

// Navigatori kryesor me tab-e
export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3498db', // Ngjyra për tab-et aktive
        tabBarInactiveTintColor: '#8e8e8e', // Ngjyra për tab-et inaktive
        tabBarStyle: {
          backgroundColor: '#fff', // Background për tab bar
          borderTopWidth: 0, // Hiq bordurat për të krijuar një pamje më moderne
          elevation: 5, // Dërgon tab bar të jetë më lart dhe të ketë shadow
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
    name="LearningMaterials"
    component={LearningMaterials} // Sigurohuni që të krijoni këtë komponent
    options={{
      tabBarLabel: 'Learning Materials',
      tabBarIcon: ({ color, size }) => <Ionicons name="reader-outline" size={size} color={color} />, // Ikonë për materialet e të mësuarit
    }}
  />
      <Tab.Screen
        name="Tutorials"
        component={TutorialStack}
        options={{
          tabBarLabel: 'Tutorials',
          tabBarIcon: ({ color, size }) => <Ionicons name="book-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color, size }) => <Ionicons name="bar-chart-outline" size={size} color={color} />,
        }}
        
      />
  
    </Tab.Navigator>
  );
}

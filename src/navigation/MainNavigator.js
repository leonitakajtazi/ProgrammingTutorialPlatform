// MainNavigator.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
  <Stack.Navigator>
    <Stack.Screen name="TutorialsScreen" component={TutorialsScreen} />
    <Stack.Screen name="TutorialDetail" component={TutorialDetailScreen} />
    <Stack.Screen name="Quiz" component={QuizScreen} />
    <Stack.Screen name="Exercise" component={ExerciseScreen} />
    <Stack.Screen name="LearningMaterials" component={LearningMaterials} options={{ title: 'JavaScript Basics' }} />



        </Stack.Navigator>
);

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tutorials" component={TutorialStack} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
    </Tab.Navigator>
  );
}

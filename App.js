import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import QuestionAndAnswerScreen from './src/screens/QuestionAndAnswerScreen';
import SubjectsScreen from './src/screens/SubjectsScreen';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QA"
          component={QuestionAndAnswerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sub"
          component={SubjectsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import HomeScreen from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddFilm from './components/AddFilm';
// import HomePage from './HomePage'; // or whatever the path to HomePage.tsx is

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddFilm" component={AddFilm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

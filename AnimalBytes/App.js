import React, { useState } from 'react';

// Import Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import scenes
import ProfileScreen from './scenes/profile/profile.js';
import LoginScreen from './scenes/login/login.js';

// Import fonts
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AnimalGroupScreen from './scenes/animal_group/animal_group.js';
import AnimalSingleScreen from './scenes/animal_single/animal_single.js';

const fetchFonts = () => {
  return Font.loadAsync({
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  'lato-italic': require('./assets/fonts/Lato-Italic.ttf'),
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  'ubuntu-italic': require('./assets/fonts/Ubuntu-Italic.ttf'),
  'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf'),
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
};

export default function App() {

  // dataLoaded for fonts
  const [dataLoaded, setDataLoaded] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const loginUser = (signed, first, last, email, token) => {
    setSignedIn(signed);
    setFirstName(first);
    setLastName(last);
    setEmail(email);
    setToken(token);
  }

  const logoutUser = () => {
    setSignedIn(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setToken("");
  }

  const Stack = createStackNavigator();
  if(!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='modal'
        headerMode='none'
      >
        <Stack.Screen 
          name="Login"
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen} 
        />
        <Stack.Screen 
          name="AnimalGroup"
          component={AnimalGroupScreen} 
        />
        <Stack.Screen 
          name="AnimalSingle"
          component={AnimalSingleScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
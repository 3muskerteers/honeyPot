import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import navigators
import TabNavigator from './src/navigation/TabNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
            <StatusBar style="dark" backgroundColor="#FFFFFF" />
      {isSignedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;

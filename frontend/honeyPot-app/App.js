import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'
//import navigators
import TabNavigator from './src/navigation/TabNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

import { CartProvider, useCart } from "react-use-cart";
import { honeyPotStore } from './src/Redux/Store';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const Stack = createStackNavigator();



  return (
    <Provider store={honeyPotStore}>
      <CartProvider>

        <NavigationContainer>
          <StatusBar style="dark" backgroundColor="#FFFFFF" />
          {isSignedIn ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </CartProvider>
    </Provider>
  );
};

export default App;

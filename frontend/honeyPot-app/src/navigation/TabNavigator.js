// TabNavigator.js
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../constants/colors';
import { HomeScreen, AccountScreen, OrdersList,DescriptionScreen,CartScreen } from '../screens/index.screens';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabNavigator() {

  const theme = useTheme();
  theme.colors.secondaryContainer = "white" //make tab navigator white 


  //This home stack allows us to  navigate between the home screen and the description screen using the stack navigator

  const HomeStack = () => { 
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Description" component={DescriptionScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    );
  }
    
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.defaultYellow}
      inactiveColor={colors.defaultGray}
      barStyle={{ backgroundColor: colors.defaultWhite }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Account') {
            iconName = 'user';
          } else if (route.name === 'Orders') {
            iconName = 'list';
          }else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          }

          return <Feather name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrdersList} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
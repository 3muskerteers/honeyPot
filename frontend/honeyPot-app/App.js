
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Button } from 'react-native';

const AuthenticatedStack = createNativeStackNavigator();
const NonAuthenticatedStack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#004539" barStyle="light-content" />
        <Layout />
      </NavigationContainer>
    </AuthProvider>
  );
}

const Layout = () => {
  const { authState, onLogout } = useAuth();

  return authState.authenticated ? (
    <AuthenticatedStack.Navigator initialRouteName='Home'>
      <AuthenticatedStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <Button onPress={onLogout} title="Logout" />
        }}
      />
    </AuthenticatedStack.Navigator>
  ) : (
    <NonAuthenticatedStack.Navigator initialRouteName='Welcome'>
      <NonAuthenticatedStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false
        }}
      />
      <NonAuthenticatedStack.Screen
        name="Login"
        component={Login}
      />
      <NonAuthenticatedStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false
        }}
      />
    </NonAuthenticatedStack.Navigator>
  );
};
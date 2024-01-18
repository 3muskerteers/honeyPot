import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"; // Corrected import
import * as SecureStore from "expo-secure-store";

import {API_URL,TOKEN_KEY} from "../constants/secs"


const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => { 
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });

  useEffect(() => { 
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log("stored", token)
      
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        setAuthState({
          token,
          authenticated: true,
        });
      }
     }
     loadToken(); // Call the function
  }, []);
    


  const register = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/users`, {
        email,
        password,
        name: "John Doe",
        contact: "1234567890",
        address: "123 Main St",
        location: "New York",
        role: "user"
      });
  
      // Use the response here
      console.log(response.data);
  
    } catch (error) {
      // If the request fails, the error object will contain information about what went wrong
      console.error(error);

    }
  };

  
  const login = async (email, password) => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
  
    try {
      const result = await axios.post(`${API_URL}/api/users/auth`, { email, password });
      console.log('Response data:', result.data);
  
      setAuthState({
        token: result.data.token,
        authenticated: true,
      });
  
      axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);
      return result
  
    } catch (e) {
      console.error('Error during login:', e);
      return { error: true, msg: e.response.data.msg };
    }
  };
  

  const logout = async () => { 
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      axios.defaults.headers.common.Authorization = "";
      setAuthState({
        token: null,
        authenticated: false,
      });
    } catch (e) {
      return { error: true, msg: e.response.data.msg };
    }
  }

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
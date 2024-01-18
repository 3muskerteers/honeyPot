import { View, Text, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import * as SecureStore from "expo-secure-store";
const TOKEN_KEY = "token";
// export const API_URL = "https://api.developbetterapps.com";

const Home = () => {
   const [users,setUsers] = useState([])
  useEffect(() => {
    const loadUser = async () => {
      try {
        //make a call to a protected route
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        console.log({ token })

        const result = await axios.get(`https://ab72-105-162-46-35.ngrok-free.app/api/users`);
        console.log(result.data)
        setUsers(result.data);
      } catch (e) {
        alert(e.message)
      }
    }
    loadUser()
  }, []);

  return (
    <ScrollView>
      {users.map((user) => (
        
        <View>
        
          <Text style={{marginHorizontal:20}} key={user._id}>{user.email}</Text>
            
        </View>
       
      ))}
    </ScrollView>
  )
}



export default Home
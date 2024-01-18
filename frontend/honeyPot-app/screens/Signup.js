import { View, Text, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';


// Define the Signup component
const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onRegister ,onLogin} = useAuth();

  const login = async () => {
    const result = await onLogin(email, password);
    console.log(result)
    
    if (result && result.error) {
      alert(result.msg);
    }
  };
  
  const register = async () => {
    const result = await onRegister(email, password);
    if (result && result.error) {
      alert(result.msg);
    } else {
      login();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Book with us today!</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email address</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder='Enter your email address'
              placeholderTextColor={COLORS.black}
              keyboardType='email-address'
              style={styles.input}
              onChangeText={(text) => setEmail(text)} value={email}
            />
          </View>
        </View>


        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={styles.input}
              onChangeText={(text) => setPassword(text)} value={password}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eyeIconContainer}
            >
              {
                isPasswordShown ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )
              }
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Sign Up"
          filled
          style={styles.button}
          onPress={register}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account</Text>
          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

// Define the styles for the Signup component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  titleContainer: {
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  inputWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },
  input: {
    flex: 1,
  },
  countryCodeInput: {
    width: "12%",
    borderRightWidth: 1,
    borderLeftColor: COLORS.grey,
    height: "100%",
  },
  eyeIconContainer: {
    position: "absolute",
    right: 12,
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  loginText: {
    fontSize: 16,
    color: COLORS.black,
  },
  loginLink: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default Signup;

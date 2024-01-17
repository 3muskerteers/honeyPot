import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import ImageDisplay from '../components/ImageDisplay';

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.darker, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
       
              <View style={styles.imageDisplayContainer}>
                <ImageDisplay />
              </View>

        {/* content  */}

        <View
          style={styles.heroText}
        >
          <Text
            style={styles.heroTitle}
          >
            Let's Get
          </Text>
          <Text
            style={styles.heroSubtitle}
          >
            Started
          </Text>

          <View style={styles.descriptionContainer}>
           
            <Text
              style={styles.descriptionText}
            >
              Book & enjoy the best catering services.
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}
          />

          <View
            style={styles.loginContainer}
          >
            <Text
              style={styles.loginText}
            >
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={styles.loginLink}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  heroText: {
    paddingHorizontal: 22,
    position: 'absolute',
    top: 400,
    width: '100%',
  },
  heroTitle: {
    fontSize: 50,
    fontWeight: '800',
    color: COLORS.white,
  },
  heroSubtitle: {
    fontSize: 46,
    fontWeight: '800',
    color: COLORS.white,
  },
  descriptionContainer: {
    marginVertical: 22,
  },
  descriptionText: {
    fontSize: 16,
    color: COLORS.white,
  },
  button: {
    marginTop: 22,
    width: '100%',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    color: COLORS.white,
  },
  loginLink: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

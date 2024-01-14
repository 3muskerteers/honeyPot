import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import ImageDisplay from '../components/ImageDisplay';
import { StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.darker, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
       
              <ImageDisplay/>

        {/* content  */}

        <View
          style={styles.heroText}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
           
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Book & enjoy the best catering services.
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate('Signup')}
            style={{
              marginTop: 22,
              width: '100%',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  marginLeft: 4,
                }}
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
          
    }
})

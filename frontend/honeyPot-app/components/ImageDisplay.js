import React from 'react'
import { View,Image } from 'react-native'
import { StyleSheet } from 'react-native';

const ImageDisplay = () => {
  return (
    <View>
    <Image
      source={require('../assets/chicken.jpg')}
      style={styles.image1}
    />

    <Image source={require('../assets/bowl.jpg')} style={styles.image2} />

    <Image source={require('../assets/veg.jpg')} style={styles.image3} />

    <Image
      source={require('../assets/grill.jpg')}
      style={styles.image4}
    />
  </View>
  )
}

export default ImageDisplay

const styles = StyleSheet.create({
  image1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: '-15deg' }],
  },
  image2: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: '-5deg' }],
  },
  image3: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: 'absolute',
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: '15deg' }],
  },
  image4: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: 'absolute',
    top: 110,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: '-15deg' }],
  },
});
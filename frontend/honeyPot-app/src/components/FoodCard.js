import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const FoodCard = ({name,description,imageURL, price}) => {

  
  return (
    <View style={styles.container}>
  <Image 
    style={styles.image} 
    source={{uri: imageURL}} 
      />
      <Text style={{alignSelf:"center"}}>{name}</Text>
      
</View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
    
  
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 7,
    // marginBottom: 5
  },

})
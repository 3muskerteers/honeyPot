import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const DescriptionScreen = ({ route, }) => {
  
  const { name,id, description ,imageURL} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Name: {name}</Text>
      <Text>ID: {id}</Text>
      <Image style={{width: 250, height: 150, borderRadius: 4, marginBottom: 5,}} source={{ uri: imageURL }} />
      <Text>Description: {description}</Text>
    </View>
  )
}

export default DescriptionScreen

const styles = StyleSheet.create({})
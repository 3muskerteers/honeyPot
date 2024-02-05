import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


const PackageCard = ({ name, description,id, imageURL, price ,foods}) => {
  
  const navigation = useNavigation(); // Get navigation object from useNavigation
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Description', {
      name: name,
      id:id,
      description: description,
      imageURL,
      foods
     
    })}
  >
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageURL }} />
      <Text style={styles.name}>{name}</Text>
      <Text>Price :{price}</Text>
    </View>
  </TouchableOpacity>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

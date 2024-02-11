import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import FoodCard from './FoodCard';

const foodPackages = [
  {
    name: "Food 1",
    description: "This is package 1",
    price: 10.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg"
  },
  {
    name: "Food 2",
    description: "This is package 2",
    price: 20.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg"
  },
  {
    name: "Food 3",
    description: "This is package 3",
    price: 30.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg"
  },
  {
    name: "Food 4",
    description: "This is package 4",
    price: 40.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg"
  },
  {
    name: "Food 5",
    description: "This is package 5",
    price: 50.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg"
  },
];


const FoodScroll = () => {
  return (
    
    <View style={{marginVertical:5}}>
      
       <FlatList 
      style={{marginTop:10}}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={foodPackages} 
    renderItem={({ item }) => (
      <FoodCard 
        name={item.name} 
        description={item.description} 
        imageURL={item.imageURL} 
        price={item.price} 
      />
    )} 
    keyExtractor={item => item.name} 
  />
   </View>
  )
}

export default FoodScroll

const styles = StyleSheet.create({})
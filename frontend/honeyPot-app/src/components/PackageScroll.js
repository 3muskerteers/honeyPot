import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import PackageCard from './PackageCard';

const foodPackages = [
  {
    name: "Package 1",
    description: "This is package 1",
    id:1,
    price: 10.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg"
  },
  {
    name: "Package 2",
    description: "This is package 2",
    id:2,
    price: 20.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg"
  },
  {
    name: "Package 3",
    description: "This is package 3",
    id:3,
    price: 30.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg"
  },
  {
    name: "Package 4",
    description: "This is package 4",
    id:4,
    price: 40.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg"
  },
  {
    name: "Package 5",
    description: "This is package 5",
    id:5,
    price: 50.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg"
  },
];


const PackageScroll = ({route,navigation}) => {
  return (
    <FlatList 
      style={{marginTop:10}}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={foodPackages} 
    renderItem={({ item }) => (
      <PackageCard 
        name={item.name} 
        description={item.description} 
        imageURL={item.imageURL} 
        price={item.price} 
      />
    )} 
    keyExtractor={item => item.name} 
  />
  )
}

export default PackageScroll

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import PackageCard from './PackageCard';

const foodPackages = [
  {
    name: "Package 1",
    description: "Nyama choma is a traditional meat dish from Kenya, and can be made with goat meat, beef, or lamb. The origin of the dish traces back to the Massai people as they immigrated from North to East Africa. Making this dish is not difficult at all. It is best to barbecue the goat meat at medium to low temperatures.",
    id:1,
    price: 10.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg",
    foods: [
      { id: 101, name: 'Bread', price: 12.99 },
      { id: 102, name: 'Honey', price: 15.99 },
      // Add more food items as needed
    ],
  },
  {
    name: "Package 2",
    description: "This is package 2",
    id:2,
    price: 20.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg",
    foods: [
      { id: 201, name: 'Filet Mignon', price: 29.99 },
      { id: 202, name: 'Lobster Bisque', price: 18.99 },
    ],
  },
  {
    name: "Package 3",
    description: "This is package 3",
    id:3,
    price: 30.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg",
    foods: [
      { id: 301, name: ' Beans', price: 12.99 },
      { id: 302, name: 'Minji', price: 15.99 },
      // Add more food items as needed
    ],
  },
  {
    name: "Package 4",
    description: "This is package 4",
    id:4,
    price: 40.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg",
    foods: [
      { id: 401, name: ' Salad', price: 12.99 },
      { id: 402, name: 'Butter ', price: 15.99 },
      // Add more food items as needed
    ],
  },
  {
    name: "Package 5",
    description: "This is package 5",
    id:5,
    price: 50.99,
    imageURL: "https://res.cloudinary.com/dchhoja40/image/upload/v1706146347/chicken_tuc812.jpg",
    foods: [
      { id: 501, name: 'Chapati', price: 12.99 },
      { id: 502, name: 'Garlic', price: 15.99 },
      // Add more food items as needed
    ],
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
      id={item.id}
        name={item.name} 
        description={item.description} 
        imageURL={item.imageURL} 
        price={item.price} 
        foods ={item.foods}
      />
    )} 
    keyExtractor={item => item.name} 
  />
  )
}

export default PackageScroll

const styles = StyleSheet.create({})
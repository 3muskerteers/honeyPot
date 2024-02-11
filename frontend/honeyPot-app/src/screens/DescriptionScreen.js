import { StyleSheet, Text, View ,Image, ImageBackground, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import StarRating from '../components/FoodRating';
import Icon from 'react-native-vector-icons/Ionicons';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { foodPackages } from '../components/PackageScroll';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { useCart } from 'react-use-cart';



const DescriptionScreen = ({ route, params }) => {
  const navigation = useNavigation();
  const {totalItems, addItem, removeItem, totalUniqueItems , updateItemQuantity} = useCart()
  const { name,id, description ,imageURL,foods, price } = route.params;
  // console.log(addItem({ id:id, price:price, description:description , name:name, imageURL:imageURL}));
  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.container, flex: 1 }}>
        <Image style={styles.image} source={{ uri: imageURL }} />
        <TouchableOpacity style={styles.floatingButtonL} onPress={() => { navigation.goBack() }}>
          <Entypo name="chevron-left" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.floatingButtonR} onPress={()=>addItem({ id:id, price:price, description:description , name:name, imageURL:imageURL})} >
          <Ionicons name="cart-outline" size={30} color="black" />
          <Text style={tailwind`absolute -right-2 px-2 py-1  bg-white  rounded-full -top-4  font-bold border-orange-200`}>{totalUniqueItems}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.groupPackage}>
        <Text style={{ fontWeight: 400, color: '#001122', fontSize: 20 }}>{name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <StarRating rating={4} />
          <Text style={{ flexDirection: 'row', padding: 10, color: '#FFC529' }}>
            See Reviews
          </Text>
        </View>

        <Text style={styles.packageName}>{description}</Text>

        <Text>FOOD MENU</Text>
        <FlatList
          data={foods}
          keyExtractor={(item, index) =>  {
            return  index.toString();
           }}
          renderItem={({ item }) => (
          <Text >{ item.name}</Text>)}
        />

      </View>
    </View>
  );
};

export default DescriptionScreen


const styles = StyleSheet.create({
  container: {
    top:20,
  },
  groupPackage: {
    top: -100,
  },
  image: {
    height: 280, // Adjust this value to change the height of the image
    width: 360, // This will make the image take up the full width of the screen
    resizeMode: "cover",
    justifyContent: "center"
  },
  packageName: {
    fontSize:15,
    color:'#858992'
  },
  floatingButtonR: {
    position: 'absolute',
    right: 10,
    top: 20,
    borderWidth: 5,
    borderRadius: 15,
    padding: 2,
    backgroundColor: "#FFC529",
    borderColor:"#FFC529"
  },
  floatingButtonL: {
    position: 'absolute',
    left: 10,
    top: 20,
    borderWidth: 5,
    borderRadius: 15,
    padding: 2,
    backgroundColor: "white",
    borderColor:"white"
  },
});
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import tailwind from "twrnc"
import Cart from '../components/Cart/Cart'
import Header from '../components/Header'

const CartScreen = () => {
  let cartHeight=StatusBar.currentHeight
  return (
    <SafeAreaView style={tailwind`font-bold text-4xl mt-6 h-full bg-gray-50`}>
      <Header/>
      <View style={tailwind` mt-0  rounded-md flex-1  `}>
        {/* <Text style={tailwind`text-5xl font-bold `}>Cart</Text> */}
        <Cart />
      </View>

    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
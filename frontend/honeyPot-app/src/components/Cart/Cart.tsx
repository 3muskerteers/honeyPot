import React, { useEffect } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity, TextInput, SafeAreaView, FlatList } from 'react-native'
import tailwind from 'twrnc'
import { Feather } from '@expo/vector-icons';
import CartItem from './CartItem';
import { AntDesign } from '@expo/vector-icons';
import { useCart } from 'react-use-cart';





const Cart = () => {
    // retrieve cartitems
    const { totalItems, emptyCart, items, totalUniqueItems, removeItem, isEmpty, cartTotal, updateItemQuantity } = useCart()

    return (
        <View style={tailwind`px-4`}>
            {/* title */}
            <View >
                <Text style={tailwind`font-extrabold text-4xl mt-4 text-center`}>Cart</Text>
            </View>

            {isEmpty ? (
                <View style={tailwind`flex justify-center items-center`}>
                    <Text style={tailwind`mt-70 font-bold text-4xl text-gray-600`}>Your Cart is Empty</Text>
                </View>
            ) : (
                <View>

                    <SafeAreaView style={tailwind`mt-4 h-120`}>
                        <View style={tailwind`flex flex-col my-2 py-2 gap-6 `}>

                            <FlatList
                                data={items}
                                renderItem={({ item }) => <CartItem id={item.id} orderName={item.name} item={item} orderPrice={item.itemTotal} imageUrl={item.imageURL} quantity={item.quantity} />}
                                keyExtractor={item => item.id}
                            />

                        </View>
                    </SafeAreaView>

                    <View style={tailwind`bg-white shadow-md shadow-orange-400 rounded-md  mt-4 p-4`}>
                        <View style={tailwind`flex flex-col gap-4 mt-2 `}>
                            <View style={tailwind`flex justify-between flex-row items-center  px-4`}>
                                <Text style={tailwind`font-medium text-xl`}>Total Cost</Text>
                                <Text style={tailwind`text-orange-400 font-bold`}>$ {cartTotal + (cartTotal * 0.2)}</Text>
                            </View>
                            <View style={tailwind`flex justify-between flex-row items-center  px-4`}>
                                <Text style={tailwind`font-medium text-xl`}>Amount to Deposit</Text>
                                <Text style={tailwind`text-orange-400 font-bold `}>$ {0.5 * (cartTotal  + (cartTotal * 0.2))}</Text>
                            </View>
                            <View style={tailwind`flex justify-between flex-row items-center  px-4`}>
                                <Text style={tailwind`font-medium  text-sm text-gray-600`}>Commission charged</Text>
                                <Text style={tailwind`text-orange-400 font-bold `}>$ {(cartTotal * 0.2).toLocaleString()} system fee</Text>
                            </View>
                        </View>
                        <View style={tailwind`w-full mt-8 mb-2 px-2 py-2 flex flex-row items-center justify-center gap-4`}>
                            <TouchableOpacity style={tailwind`px-4 py-2 mt-2 border-2 bg-white border-orange-400 focus:border-orange-200 rounded-full flex justify-center items-center flex-row  gap-2`} onPress={()=>emptyCart()}>
                                <Text style={tailwind`text-center text-orange-400 font-bold text-2xl`}>Empty Cart
                                </Text>
                                <AntDesign name="delete" size={24} color="black" />

                            </TouchableOpacity>
                            <TouchableOpacity style={tailwind`px-4 py-2 mt-2 bg-orange-400 focus:bg-orange-200 rounded-full flex justify-center items-center flex-row shadow-md gap-2`}>
                                <Text style={tailwind`text-center font-bold text-2xl`}>Make Payment
                                </Text>

                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            )}



        </View>
    )
}

export default Cart

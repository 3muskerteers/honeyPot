import React from 'react'
import { View, Text, Image, Touchable, TouchableOpacity, TextInput, SafeAreaView, FlatList } from 'react-native'
import tailwind from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { useCart } from 'react-use-cart';


const CartItem = ({ id, imageUrl, orderName, orderPrice, quantity, item }) => {
    const {removeItem, updateItemQuantity} = useCart()
    return (


        <View style={tailwind` bg-white flex flex-row flex-1 justify-start items-center gap-2 shadow-orange-300 rounded-md shadow-lg mb-4`}>
            <View style={tailwind`rounded-full m-4 `}>
                <Image source={{ uri: imageUrl }} style={tailwind`w-[100px] h-[100px] rounded-full`} />
            </View>
            <View style={tailwind`flex flex-col my-4 items-start justify-start flex-wrap`}>
                <Text style={tailwind`mt-2 font-bold text-lg w-[90px]`}>{orderName}</Text>
                <Text style={tailwind`mt-2 font-bold text-sm text-orange-400`}>$ {orderPrice}</Text>
            </View>
            <View style={tailwind`flex flex-row gap-2 mx-4 items-center justify-between my-4`}>
                <TouchableOpacity  onPress={()=> updateItemQuantity(item.id, item.quantity + 1)} >
                    <Feather name="plus-circle" size={24} color="orange" style={tailwind`border-0`} />
                </TouchableOpacity>
                <View style={tailwind``}>
                    <Text style={tailwind`text-center font-extrabold text-lg p-2 `}>{quantity}</Text>
                </View>




                <TouchableOpacity onPress={()=> updateItemQuantity(item.id, item.quantity-1) } >
                    <Feather name="minus-circle" size={24} color="gray" />
                </TouchableOpacity>


            </View>
            <TouchableOpacity onPress={() => removeItem(id)} style={tailwind`absolute right-0 top-0 px-3 py-3 m-2`}>
                <Feather name="x" size={20} color="gray" />
            </TouchableOpacity>

        </View>
    )
}

export default CartItem
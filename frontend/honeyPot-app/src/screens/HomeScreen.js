import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import PackageScroll from '../components/PackageScroll';
import FoodScroll from '../components/FoodScroll';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />

      <ScrollView>
        <View style={{ marginHorizontal: 15 }}>
          <Text h3 style={{ fontWeight: 'bold', paddingBottom: 3 }}>
            Foods
          </Text>
          <Text h5>Buat momen istimewamu bertema</Text>
        </View>

        <FoodScroll />

        <View style={{ marginHorizontal: 15 }}>
          <Text h3 style={{ fontWeight: 'bold' }}>
            Packages
          </Text>
          <Text h5>Buat momen istimewamu bertema</Text>
        </View>

        <PackageScroll />

        <Button
          title="CREATE YOUR PACKAGE"
          buttonStyle={{
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
          }}
          containerStyle={{
            width: 260,
            marginHorizontal: 50,
            marginVertical: 60,
          }}
          titleStyle={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Cart')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

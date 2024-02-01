import { StyleSheet ,View,ScrollView} from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import PackageScroll from '../components/PackageScroll';
import FoodScroll from '../components/FoodScroll';
import Header from '../components/Header';



const HomeScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();


  return (
    // <SafeAreaView style={{ paddingTop: insets.top }}>
    <SafeAreaView >
      <Header />

      <ScrollView style={{marginBottom:95}}>

      <View style={{ marginHorizontal: 15 }}>
      <Text h3 style={{  fontWeight: 'bold',paddingBottom:3}}>
        Foods </Text>
      <Text h5>Buat momen istimewamu bertema</Text>

      </View>
    
      <FoodScroll />

      <View style={{ marginHorizontal: 15 }}>
      <Text h3 style={{  fontWeight: 'bold',}}>
        Packages </Text>
      <Text h5 >Buat momen istimewamu bertema</Text>

      </View>
        <PackageScroll />
      <Button
              title="CREATE YOUR PACKAGE"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
                marginVertical: 10,
              }}
              containerStyle={{
                width: '80%', // Use a percentage of the screen width
                alignSelf: 'center', // Center the button horizontally
                marginVertical: 10,
              }}
          titleStyle={{ fontWeight: 'bold' }}
          
          onPress={() => navigation.navigate('Search')}
            />

        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

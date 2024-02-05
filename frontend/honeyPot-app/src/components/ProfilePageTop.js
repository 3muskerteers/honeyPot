import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Button } from '@rneui/themed';
import React from 'react';
import Colors from '../constants/colors';

const ProfilePageTop = () => {
  const imageURL =
    'https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg';
  return (
    <SafeAreaView>
      <View
        style={styles.container}
      >
        <View>
          <Image
            source={{ uri: imageURL }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderColor: Colors.defaultYellow,
              borderWidth: 2,
            }}
          />
        </View>

        <View>
          <Button
            title="LOG OUT"
            buttonStyle={{
              borderColor: 'rgba(170, 7, 7, 1)',
            }}
            type="outline"
            raised
            titleStyle={{ color: 'rgba(170, 7, 7, 1)' }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePageTop;

const styles = StyleSheet.create({

  container:{
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

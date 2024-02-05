import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.box}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dchhoja40/image/upload/v1706232117/logo-no-bg_vsfcv3.png',
        }}
        style={styles.logoImage}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dchhoja40/image/upload/v1706146346/grill_gbbwvd.jpg',
        }}
        style={styles.userImage}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    marginBottom: 10,

    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  userImage: {
    marginVertical: 15,
    marginHorizontal: 15,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  logoImage: {
    marginVertical: 10,
    marginHorizontal: 15,
    width: 65,
    height: 50,
  },
});

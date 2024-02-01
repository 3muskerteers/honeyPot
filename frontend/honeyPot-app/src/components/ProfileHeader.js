import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';
import React, { useState } from 'react';

const ProfileHeader = () => {
  const navigation = useNavigation();
  const [isNotification, setIsNotification] = useState(false); //TODO: Fix this FROM DB

  const handleNotification = () => {
    setIsNotification(!isNotification);
  };

  return (
    <SafeAreaView>
      <View style={styles.box}>
        <View style={styles.iconsContainer}>
          <View>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            >
              <Entypo name="chevron-left" size={30} color={'black'} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => handleNotification()}>
              {isNotification ? (
                <MaterialCommunityIcons
                  name="bell"
                  size={30}
                  color={Colors.defaultYellow}
                />
              ) : (
                <MaterialCommunityIcons
                  name="bell-off-outline"
                  size={30}
                  color={Colors.defaultYellow}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.defaultWhite,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backIcon: {
    borderWidth: 4,
    borderRadius: 15,
    borderColor: Colors.defaultYellow,
    backgroundColor: Colors.defaultYellow,
  },
});

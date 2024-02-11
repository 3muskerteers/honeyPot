import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfilePageTop from '../components/ProfilePageTop'
import ProfileEdit from '../components/ProfileEdit'

const AccountScreen = () => {
  return (
    <SafeAreaView>
      <ProfileHeader />
      <ProfilePageTop />
      <ProfileEdit />
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})

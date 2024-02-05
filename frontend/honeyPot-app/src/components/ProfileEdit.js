import { StyleSheet, Text, View ,SafeAreaView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/themed';
import EditableInput from './EditableInput'

const ProfileEdit = () => {
  const [email, setEmail] = useState("adolphodhiambo@outlook.com");
  const [name, setName] = useState("Adolph Odhiambo");
  const [phone, setPhone] = useState("+254 712 345 6789");

  const handleSave = async () => {
    console.log('Save button pressed');
    // Add your POST request code here
  };

  return ( 
    
    <SafeAreaView>
    <ScrollView>
      
      <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
        <EditableInput label="Name" initialValue={name} onValueChange={setEmail} />
        <EditableInput label="Email" initialValue={email} onValueChange={setName} />
          <EditableInput label="Phone" initialValue={phone} onValueChange={setPhone} />
          
         


          <Button
              title="SAVE CHANGES"
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
          
          onPress={handleSave}
            />
        </View>
      </ScrollView>
        
    </SafeAreaView>

  );
};

export default ProfileEdit

const styles = StyleSheet.create({})

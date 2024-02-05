import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { TextInput, IconButton } from 'react-native-paper';

const EditableInput = ({ label, initialValue, onValueChange }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(initialValue);
  const textInputRef = useRef(null);

  useEffect(() => {
    if (isEditable) {
      textInputRef.current?.focus();
    } else {
      textInputRef.current?.blur();
    }
  }, [isEditable]);

  const handleChange = (newValue) => {
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={textInputRef}
        label={label}
        mode='outlined'
        activeOutlineColor="#FFC529"
        editable={isEditable}
        value={value}
        onChangeText={handleChange}
        style={{ width: '87%' }}
      />
      <IconButton
        icon="pencil"
        onPress={() => setIsEditable(true)}
      />
    </View>
  );
};

export default EditableInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  }
});
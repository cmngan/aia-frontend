import React from 'react';
import {
  TextInput as RnTextInput, StyleSheet, View
} from 'react-native';
import Text from '../Text';

function TextInput({
  required,
  placeholder,
  disabled,
  setDisabled,
  touched,
  setTouched,
  error,
  ...props
}) {
  return (
    <View style={styles.container}>
      <RnTextInput
        editable={!disabled}
        style={styles.textInput}
        placeholder={`${placeholder}${required ? ' *' : ''}`}
        {...props}
      />
      {touched && error && <Text type="error">{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#ececec',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: 'red'
    // minWidth: 300
  }
});

export default TextInput;

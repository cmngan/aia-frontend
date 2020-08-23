/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  TextInput as RnTextInput, StyleSheet
} from 'react-native';

function TextInput(props) {
  return <RnTextInput style={styles.textInput} {...props} />;
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ececec',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    borderColor: 'red'
    // minWidth: 300
  }
});

export default TextInput;

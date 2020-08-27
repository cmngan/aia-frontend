import React from 'react';
import {
  TextInput as RnTextInput, StyleSheet, Platform
} from 'react-native';
import color from 'constants/color';
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
    <>
      <RnTextInput
        editable={!disabled}
        style={[styles.textInput, disabled && styles.disabled]}
        placeholder={`${placeholder}${required ? ' *' : ''}`}
        {...props}
      />
      {touched && error && <Text type="error">{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
    backgroundColor: '#ececec',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  disabled: {
    backgroundColor: color.light.disabled,
    ...Platform.OS === 'web' && {
      cursor: 'NOT-ALLOWED'
    }
  }
});

export default TextInput;

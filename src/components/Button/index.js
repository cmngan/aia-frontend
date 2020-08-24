import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text
} from 'react-native';
import color from 'constants/color';

function Button({
  title, onPress, isLoading, disabled
}) {
  const isDisabled = isLoading || disabled;
  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabled]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.light.primary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    // minWidth: 300
  },
  disabled: {
    backgroundColor: color.light.disabled,
    cursor: 'NOT-ALLOWED'
  },
  text: {
    color: color.light.primaryReverse,
    // fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Button;

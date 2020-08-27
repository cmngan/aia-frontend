import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, Platform
} from 'react-native';
import color from 'constants/color';
import { useLayout } from 'hooks';

function Button({
  title, onPress, isLoading, disabled, type
}) {
  const { isDesktop } = useLayout();
  const isDisabled = isLoading || disabled;
  return (
    <TouchableOpacity
      style={[styles.button, styles[type], isDesktop && styles[`${type}_desktop`], isDisabled && styles.disabled]}
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
    // maxWidth: layout.isDesktop ? 200 : 'none'
    // minWidth: 300
  },
  disabled: {
    backgroundColor: color.light.disabled,
    ...Platform.OS === 'web' && {
      cursor: 'NOT-ALLOWED'
    }
  },
  text: {
    color: color.light.primaryReverse,
    // fontWeight: 'bold',
    textAlign: 'center'
  },
  page: {
    margin: 16,
  },
  page_desktop: {
    width: 300
  }
});

export default Button;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  StyleSheet, Text as RnText
} from 'react-native';
import color from 'constants/color';

function Text({ type, ...props }) {
  return (
    <RnText style={[styles.text, typeStyles[type]]} {...props} />
  );
}

const styles = StyleSheet.create({
  text: {
    color: color.light.text,
    // textAlign: 'center'
  },
});

const typeStyles = StyleSheet.create({
  hint: {
    color: '#aaa'
  },
  primary: {
    color: color.light.primary
  }
});

export default Text;

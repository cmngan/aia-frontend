import React from 'react';
import {
  StyleSheet, Text as RnText
} from 'react-native';
import color from 'constants/color';

function Text({ type, children, ...props }) {
  if (!children) return null;
  return (
    <RnText style={[styles.text, typeStyles[type]]} {...props}>
      {children}
    </RnText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: color.light.text,
  },
});

const typeStyles = StyleSheet.create({
  hint: {
    color: '#aaa'
  },
  primary: {
    color: color.light.primary
  },
  error: {
    color: color.light.primary,
    marginTop: -16,
    marginBottom: 16,
    paddingHorizontal: 4,
    paddingTop: 4
  }
});

export default Text;

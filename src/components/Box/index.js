/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import color from 'constants/color';
import layout from 'constants/layout';

function Box({ type, ...props }) {
  return (
    <View style={[typeStyles[type]]} {...props} />
  );
}

const typeStyles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dialog: {
    backgroundColor: color.light.background,
    padding: 36,
    paddingBottom: 20,
    width: 400,
    maxWidth: layout.window.width,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16
  }
});

export default Box;

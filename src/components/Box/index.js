import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import color from 'constants/color';
import { useLayout } from 'hooks';

function Box({
  type, wrap, row, ...props
}) {
  const { width } = useLayout();
  return (
    <View
      style={[
        typeStyles[type],
        row && { flexDirection: 'row' },
        wrap && { flexWrap: 'wrap' },
        type === 'dialog' && { maxWidth: width }
      ]}
      {...props}
    />
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
    // maxWidth: layout.window.width,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16
  },
  page: {
    flex: 1,
    padding: 16
  }
});

export default Box;

import React from 'react';
import {
  StyleSheet, View, ScrollView
} from 'react-native';
import color from 'constants/color';
import { useLayout } from 'hooks';

function Box({
  type, wrap, row, top, backgroundColor, style, ...props
}) {
  const { width, height } = useLayout();
  const Component = type === 'page' ? ScrollView : View;
  return (
    <Component
      style={[
        typeStyles[type],
        row && { flexDirection: 'row' },
        top && { alignItems: 'flex-start' },
        wrap && { flexWrap: 'wrap' },
        backgroundColor && { backgroundColor },
        type === 'dialog' && { maxWidth: width * 0.9 },
        type === 'main' && { minHeight: height * 0.6 },
        style
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
    paddingVertical: 16,
    marginBottom: 16,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  }
});

export default Box;

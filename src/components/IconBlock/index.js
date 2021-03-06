import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useLayout } from 'hooks';

function IconBlock({
  iconName, label, backgroundColor = '#323a31', onPress
}) {
  const { isDesktop } = useLayout();
  return (
    <TouchableOpacity
      style={[styles.main, isDesktop && styles.main_desktop, { backgroundColor }]}
      onPress={onPress}
    >
      <FontAwesome name={iconName} size={50} color="#fff" />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 30,
    marginBottom: 16,
    minWidth: 300,
    marginHorizontal: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  main_desktop: {
    maxWidth: 300,
  },
  text: {
    padding: 16,
    color: '#fff',
    fontSize: 30
    // maxWidth: layout.window.width,
  },
});

export default IconBlock;

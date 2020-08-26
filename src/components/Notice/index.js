import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import color from 'constants/color';
import { FontAwesome } from '@expo/vector-icons';

function Notice({ type, ...props }) {
  return (
    <View style={styles.main} type="row">
      <FontAwesome name="warning" size={24} color="#fff" />
      <Text style={styles.text} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 16,
    backgroundColor: color.light.warning,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    marginLeft: 12
  },
});

export default Notice;

import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';
import color from 'constants/color';
import { FontAwesome } from '@expo/vector-icons';
import { useCameraRoll } from '@react-native-community/hooks';

function Avatar({ uri, size = 250, ...props }) {
  const [photos, getPhotos, saveToCameraRoll] = useCameraRoll();

  return (
    <TouchableOpacity onPress={() => getPhotos()}>

      <Image

        style={getCircleStyle(size)}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </TouchableOpacity>
  );
}

const getCircleStyle = (size) => ({
  width: size,
  height: size,
  borderRadius: size / 2
});

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
});

export default Avatar;

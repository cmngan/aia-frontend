import React from 'react';
import { IconBlock } from 'components';
import { screens } from 'navigation';
import { useNavigation } from '@react-navigation/native';

function ProfileBlock() {
  const navigation = useNavigation();
  return (
    <IconBlock
      iconName="user"
      label="Profile"
      onPress={() => navigation.navigate(screens.Profile.key)}
    />
  );
}

export default ProfileBlock;

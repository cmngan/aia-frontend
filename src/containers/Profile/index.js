import React from 'react';
import { View, Text, Button } from 'react-native';
import { logoutApi } from 'integration';

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Button title="logout" onPress={logoutApi} />
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate(screens.Login.key)}
      /> */}
    </View>
  );
}

Profile.signInOnly = true;

export default Profile;

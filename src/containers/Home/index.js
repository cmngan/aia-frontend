import React from 'react';
import { View, Text, Button } from 'react-native';
import { screens } from 'navigation';
import { logoutApi } from 'integration';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="logout" onPress={logoutApi} />
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate(screens.Login.key)}
      /> */}
    </View>
  );
}

HomeScreen.title = 'haha';
HomeScreen.signInOnly = true;

export default HomeScreen;

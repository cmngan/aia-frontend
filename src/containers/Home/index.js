import React from 'react';
import { View, Text, Button } from 'react-native';
import { logoutApi } from 'integration';

function HomeScreen() {
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
HomeScreen.route = '/';

export default HomeScreen;

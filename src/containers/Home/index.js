import React from 'react';
import { View, Text, Button } from 'react-native';
import { screens } from 'navigation';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(screens.Registration.key)}
      />
    </View>
  );
}

HomeScreen.title = 'haha';
HomeScreen.route = 'home';

export default HomeScreen;

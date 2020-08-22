import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'expo';

import * as containers from '../containers';

const Stack = createStackNavigator();

const prefix = Linking.makeUrl('/');
const linking = {
  prefixes: [prefix],
};

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export const screens = Object.entries(containers)
  .reduce((p, [key, component]) => ({
    ...p,
    [key]: {
      key,
      component,
      displayName: component.displayName || component.name
    }
  }), {});

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={screens.Home.key}>
      {Object.values(screens).map(({ key, component, displayName }) => (
        <Stack.Screen
          key={key}
          name={key}
          component={component}
          options={{ title: displayName }}
        />
      ))}
    </Stack.Navigator>
  );
}

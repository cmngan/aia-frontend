import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'expo';

import * as containers from '../containers';

const Stack = createStackNavigator();

export const screens = Object.entries(containers)
  .reduce((p, [key, component]) => ({
    ...p,
    [key]: {
      key,
      component,
      displayName: component.title || component.displayName || component.name,
      route: component.route || key.toLowerCase()
    }
  }), {});

const prefix = Linking.makeUrl('/');
const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      ...Object.values(screens).reduce((p, c) => ({
        ...p,
        [c.key]: c.route
      }), {})
    }
  }
};

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}

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

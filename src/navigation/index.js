import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'expo';

import { useUserContext } from 'hooks';
import { View } from 'react-native';
import * as containers from '../containers';

const Stack = createStackNavigator();

export const screens = Object.entries(containers)
  .reduce((p, [key, component]) => ({
    ...p,
    [key]: {
      key,
      component,
      displayName: component.title || component.displayName || component.name,
      route: component.route || key.toLowerCase(),
      signOutOnly: component.signOutOnly,
      signInOnly: component.signInOnly,
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
  const user = useUserContext();
  if (user === undefined) return null;
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator user={user} />
    </NavigationContainer>
  );
}

function RootNavigator({ user }) {
  return (
    <Stack.Navigator>
      {Object.values(screens).map(({
        key, component, displayName, signInOnly, signOutOnly
      }) => {
        if ((signInOnly && !user) || (signOutOnly && user)) {
          // console.log(key);
          return null;
        }
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={component}
            headerRight={() => <View>123</View>}
            options={{ title: displayName }}
          />
        );
      })}
    </Stack.Navigator>
  );
}

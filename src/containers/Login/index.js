import React from 'react';
import { screens } from 'navigation';
import {
  TextInput, Button, Text, Box
} from 'components';

function LoginScreen({ navigation }) {
  return (
    <Box type="center">
      <Box type="dialog">
        <TextInput placeholder="username" />
        <TextInput placeholder="password" />
        <Button
          title="LOGIN"
          onPress={() => navigation.navigate(screens.Home.key)}
        />
        <Box type="row">
          <Text type="hint">Not registered? </Text>
          <Text type="primary" onPress={() => navigation.navigate(screens.Registration.key)}>Create an account</Text>
        </Box>
      </Box>
    </Box>
  );
}

LoginScreen.title = 'Login';

export default LoginScreen;

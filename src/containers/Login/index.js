import React from 'react';
import { screens } from 'navigation';
import {
  TextInput, Button, Text, Box
} from 'components';
import { useTextInput, useSubmit } from 'hooks/form';
import { loginApi } from 'integration';

function LoginScreen({ navigation }) {
  const emailInput = useTextInput('', 'email');
  const passwordInput = useTextInput('', 'password');
  const [onSubmit, status] = useSubmit(
    (email, password) => loginApi(email, password),
    [emailInput, passwordInput]
  );
  return (
    <Box type="center">
      <Box type="dialog">
        <TextInput placeholder="email" {...emailInput} />
        <TextInput placeholder="password" textContentType="password" {...passwordInput} />
        <Button
          title="LOGIN"
          onPress={onSubmit}
          isLoading={status.isLoading}
        />
        <Text type="error">{status.error}</Text>

        <Box type="row">
          <Text type="hint">Not registered? </Text>
          <Text type="primary" onPress={() => navigation.navigate(screens.Registration.key)}>Create an account</Text>
        </Box>
      </Box>
    </Box>
  );
}

LoginScreen.title = 'Login';
LoginScreen.signOutOnly = true;
LoginScreen.route = '/';

export default LoginScreen;

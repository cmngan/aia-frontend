import React from 'react';
import {
  TextInput, Button, Box, Text
} from 'components';
import { useTextInput, useSubmit } from 'hooks/form';
import { registerApi } from 'integration';

function RegistrationScreen() {
  const emailInput = useTextInput('', 'email');
  const passwordInput = useTextInput('', 'required');
  const password2Input = useTextInput('', 'required', (value) => passwordInput.value !== value && 'Incorrect confirm password');
  const [onSubmit, status] = useSubmit(
    (email, password) => registerApi(email, password),
    // .then(() => navigation.navigate(screens.Home.key)),
    [emailInput, passwordInput, password2Input]
  );
  return (
    <Box type="center">
      <Box type="dialog">
        <TextInput placeholder="Email" {...emailInput} />
        <TextInput placeholder="Password" textContentType="newPassword" {...passwordInput} />
        <TextInput placeholder="Confirm password" {...password2Input} />
        <Button
          title="Register"
          onPress={onSubmit}
          isLoading={status.isLoading}
        />
        <Text type="error">{status.error}</Text>
      </Box>
    </Box>
  );
}

RegistrationScreen.title = 'Sign Up for free';
RegistrationScreen.signOutOnly = true;

export default RegistrationScreen;

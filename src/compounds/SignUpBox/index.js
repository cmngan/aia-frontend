import React from 'react';
import {
  TextInput, Button, Box, Text
} from 'components';
import { useTextInput, useSubmit } from 'hooks/form';
import { registerApi } from 'integration';

function SignUpBox() {
  const emailInput = useTextInput('', 'email');
  const passwordInput = useTextInput('', 'required');
  const password2Input = useTextInput('', 'required', (value) => passwordInput.value !== value && 'Incorrect confirm password');
  const [onSubmit, status] = useSubmit(
    (email, password) => registerApi(email, password),
    [emailInput, passwordInput, password2Input]
  );
  return (
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
  );
}

export default SignUpBox;

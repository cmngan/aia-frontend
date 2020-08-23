import React from 'react';
import { screens } from 'navigation';
import {
  TextInput, Button, Box
} from 'components';
import { useTextInput, useSubmit } from 'hooks';

function RegistrationScreen({ navigation }) {
  const emailInput = useTextInput('', 'email');
  const passwordInput = useTextInput('', 'required');
  const password2Input = useTextInput('', 'required', (value) => passwordInput.value !== value && 'Incorrect confirm password');
  const onSubmit = useSubmit(
    () => navigation.navigate(screens.Home.key), [emailInput, passwordInput, password2Input]
  );
  return (
    <Box type="center">
      <Box type="dialog">
        <TextInput placeholder="Email" {...emailInput} />
        <TextInput placeholder="Password" {...passwordInput} />
        <TextInput placeholder="Confirm password" {...password2Input} />
        <Button
          title="Register"
          onPress={onSubmit}
        />
      </Box>
    </Box>
  );
}

RegistrationScreen.title = 'Sign Up for free';

export default RegistrationScreen;

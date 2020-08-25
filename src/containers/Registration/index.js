import React from 'react';
import { Box, } from 'components';
import { SignUpBox } from 'compounds';

function RegistrationScreen() {
  return (
    <Box type="center">
      <SignUpBox />
    </Box>
  );
}

RegistrationScreen.title = 'Sign Up for free';
RegistrationScreen.signOutOnly = true;

export default RegistrationScreen;

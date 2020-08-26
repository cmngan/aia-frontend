import React from 'react';
import { Box } from 'components';
import { SignInBox } from 'compounds';

function LoginScreen() {
  return (
    <Box type="center">
      <SignInBox />
    </Box>
  );
}

LoginScreen.title = 'Login';
LoginScreen.signOutOnly = true;
LoginScreen.route = '/';

export default LoginScreen;

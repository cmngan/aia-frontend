import React from 'react';
import { Box } from 'components';
import { SignInBox } from 'compounds';

function LoginScreen({ navigation }) {
  return (
    <Box type="center">
      <SignInBox navigation={navigation} />
    </Box>
  );
}

LoginScreen.title = 'Login';
LoginScreen.signOutOnly = true;
LoginScreen.route = '/';

export default LoginScreen;

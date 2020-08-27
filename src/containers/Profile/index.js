import React from 'react';
import {
  Box, Button, TextInput, Text
} from 'components';

import { AccountActivatedNotice, PasswordUpdate } from 'compounds';

function Profile() {
  return (
    <>
      <AccountActivatedNotice />
      <Box type="page" backgroundColor="#fff">
        <Box type="main">
          <Text type="h1">General user information</Text>
          <TextInput placeholder="Name" />
          <TextInput placeholder="Email" />
          <Button title="Save (Not ready)" onPress={console.log} />
          <PasswordUpdate />
        </Box>
        <Button title="Delete Account (Not ready)" type="secondary" layout="page" hasConfirm onPress={console.log} />
      </Box>
    </>
  );
}

Profile.signInOnly = true;

export default Profile;

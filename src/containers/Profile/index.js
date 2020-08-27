import React from 'react';
import {
  Box, Button, IconBlock, Avatar, TextInput
} from 'components';
import { AccountActivatedNotice, ProfileBlock } from 'compounds';
import { logoutApi } from 'integration';

function Profile() {
  return (
    <>
      <AccountActivatedNotice />
      <Box type="page">
        <Box type="dialog">
          <Avatar />
          <TextInput placeholder="Name" />
        </Box>
      </Box>
      <Button title="logout" type="page" onPress={logoutApi} />
    </>
  );
}

Profile.signInOnly = true;

export default Profile;

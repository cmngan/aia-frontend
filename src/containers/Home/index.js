import React from 'react';
import { logoutApi } from 'integration';
import { Box, Button } from 'components';
import { AccountActivatedNotice, ProfileBlock } from 'compounds';

function HomeScreen() {
  return (
    <>
      <AccountActivatedNotice />
      <Box type="page">
        <Box wrap row>
          <ProfileBlock />
          <ProfileBlock />
          <ProfileBlock />
          <ProfileBlock />
        </Box>
      </Box>
      <Button title="logout" type="page" onPress={logoutApi} />
    </>
  );
}

HomeScreen.title = 'Dashboard';
HomeScreen.signInOnly = true;
HomeScreen.route = '/';

export default HomeScreen;

import React from 'react';
import { logoutApi } from 'integration';
import { Box, Button, IconBlock } from 'components';
import { AccountActivatedNotice, ProfileBlock } from 'compounds';

function HomeScreen() {
  return (
    <>
      <AccountActivatedNotice />
      <Box type="page">
        <Box wrap row top>
          <ProfileBlock />
          <IconBlock iconName="star" label="Favorite" backgroundColor="#82204A" />
          <IconBlock iconName="list-alt" label="Order" backgroundColor="#558C8C" />
          <IconBlock iconName="phone" label="Contact" backgroundColor="#231123" />
          <IconBlock iconName="gear" label="Settings" backgroundColor="#323a31" />
        </Box>
        <Button title="Logout" type="page" onPress={logoutApi} />
      </Box>
    </>
  );
}

HomeScreen.title = 'Dashboard';
HomeScreen.signInOnly = true;
HomeScreen.route = '/';

export default HomeScreen;

import React from 'react';
import { Notice } from 'components';
import { useUserContext } from 'hooks';

function AccountActivatedNotice() {
  const user = useUserContext();
  if (user?.emailVerified) return null;
  return <Notice>{`Your email(${user?.email}) is not verified yet. Please check your email to verify it in order to enjoy all functionalities.`}</Notice>;
}

export default AccountActivatedNotice;

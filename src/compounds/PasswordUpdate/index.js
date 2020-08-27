import React from 'react';
import { Text, TextInput, Button } from 'components';
import { useSubmit, useTextInput } from 'hooks';
import { updatePassword } from 'integration';

function PasswordUpdate() {
  const passwordInput = useTextInput('', 'password');
  const newPasswordInput = useTextInput('', 'newPassword');
  const [onSubmit, status] = useSubmit(
    (password, newPassword) => updatePassword(password, newPassword).then(() => {
      passwordInput.reset();
      newPasswordInput.reset();
    }),
    [passwordInput, newPasswordInput]
  );
  return (
    <>
      <Text type="h1">Password Management</Text>
      <TextInput placeholder="Current Password" {...passwordInput} />
      <TextInput placeholder="New Password" {...newPasswordInput} />
      <Button title="Save" onPress={onSubmit} isLoading={status.isLoading} />
      <Text type="error">{status.error}</Text>
    </>
  );
}

export default PasswordUpdate;

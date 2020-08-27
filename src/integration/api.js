import { auth } from 'firebase';

const errorCode = {
  'auth/requires-recent-login': 400
};

export function registerApi(email, password) {
  return auth()
    .createUserWithEmailAndPassword(email, password);
}

export function loginApi(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function logoutApi() {
  return auth().signOut();
}

export function userListener(onChangeUser) {
  return auth().onAuthStateChanged(onChangeUser);
}

export function updateUser({ displayName, photoURL }) {
  const user = auth().currentUser;
  return user.updateProfile({
    displayName,
    photoURL
  });
}

export function removeUser() {
  const user = auth().currentUser;
  return user.delete();
}

export function updateEmail(email) {
  const user = auth().currentUser;
  return user.updateEmail(email);
}

export async function updatePassword(oldPassword, newPassword) {
  const user = auth().currentUser;
  await loginApi(user.email, oldPassword);

  return user.updatePassword(newPassword);
}

export function reAuth() {
  // const user = auth().currentUser;
  // var credential;

  // // Prompt the user to re-provide their sign-in credentials

  // user.reauthenticateWithCredential(credential).then(function() {
  //   // User re-authenticated.
  // }).catch(function(error) {
  //   // An error happened.
  // });
}

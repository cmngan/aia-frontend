import { auth } from 'firebase';

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

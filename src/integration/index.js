import * as firebase from 'firebase';
import firebaseConfig from './config';
// Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";

firebase.initializeApp(firebaseConfig);
export * from './api';

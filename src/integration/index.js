import * as firebase from 'firebase';

// Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA1O_NUqxv-EwWA50s383Yi1bWHONPfSaI',
  authDomain: 'aia-app-32539.firebaseapp.com',
  databaseURL: 'https://aia-app-32539.firebaseio.com',
  projectId: 'aia-app-32539',
  storageBucket: 'aia-app-32539.appspot.com',
  messagingSenderId: '653449931615',
  appId: '1:653449931615:web:c29ae6ea8371eb44a664ea',
  measurementId: 'G-DVYGZEKQ9J'
};

firebase.initializeApp(firebaseConfig);

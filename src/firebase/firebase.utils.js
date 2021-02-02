import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC7O4alFDBAnlCYGlZ9C7EUJn6lIZcVPVA',
  authDomain: 'crwn-db-42115.firebaseapp.com',
  databaseURL: 'https://crwn-db-42115.firebaseio.com',
  projectId: 'crwn-db-42115',
  storageBucket: 'crwn-db-42115.appspot.com',
  messagingSenderId: '352656882297',
  appId: '1:352656882297:web:0b359069884cb460b2b2a8',
  measurementId: 'G-QMCL320N3Y',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

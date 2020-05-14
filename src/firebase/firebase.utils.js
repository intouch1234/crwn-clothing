import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSlSIw1cVBE6xoVHjZeNeX9ra1AU_Bdqg",
    authDomain: "crwn-db-759b5.firebaseapp.com",
    databaseURL: "https://crwn-db-759b5.firebaseio.com",
    projectId: "crwn-db-759b5",
    storageBucket: "crwn-db-759b5.appspot.com",
    messagingSenderId: "343174804881",
    appId: "1:343174804881:web:ace514d96cae18415fd630",
    measurementId: "G-KPCKT7LGM8"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
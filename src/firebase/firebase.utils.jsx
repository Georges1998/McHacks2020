import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
 apiKey: "AIzaSyCcKVUKSmVW-zxOWrVcl9rNzbAY8P2ztEU",
  authDomain: "mchacks2020.firebaseapp.com",
  databaseURL: "https://mchacks2020.firebaseio.com",
  projectId: "mchacks2020",
  storageBucket: "mchacks2020.appspot.com",
  messagingSenderId: "369140400841",
  appId: "1:369140400841:web:69b1f467c8f022a1374318",
  measurementId: "G-16QHWLS9W7"

}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
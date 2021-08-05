import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBBhPtqc_BgIrH-3cViIQ0YM8bC6rMQSUQ",
  authDomain: "ecommerce-80bcc.firebaseapp.com",
  projectId: "ecommerce-80bcc",
  storageBucket: "ecommerce-80bcc.appspot.com",
  messagingSenderId: "517883927717",
  appId: "1:517883927717:web:a27672d97c7c302ce2814c",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData: any = null
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if (userSnapshot!) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData,
      });
    } catch (error) {}
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

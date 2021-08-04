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
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

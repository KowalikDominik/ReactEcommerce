import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { CollectionItems } from "../interfaces";

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

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert(error);
    }
  }
  return userRef;
};

export const addCollectionsAndDocument = async (collection, objectsToAdd) => {
  const collectionRef = firestore.collection(collection);

  const batch = firestore.batch();
  objectsToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element);
  });
  return await batch.commit();
};

export const convertCollectionToMap = (snapshot): CollectionItems => {
  const data = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      items,
      id: doc.id,
      title,
    };
  });
  //convert array of collection to object by key title
  return data.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

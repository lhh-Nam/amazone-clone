import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSACjvvnagQPN-63ewP4ERhsByMY8H5ss",
  authDomain: "challenge-d2ced.firebaseapp.com",
  databaseURL: "https://challenge-d2ced.firebaseio.com",
  projectId: "challenge-d2ced",
  storageBucket: "challenge-d2ced.appspot.com",
  messagingSenderId: "20132315382",
  appId: "1:20132315382:web:b2f1e7b685f99dc8de2cd7",
  measurementId: "G-488PD9D01P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

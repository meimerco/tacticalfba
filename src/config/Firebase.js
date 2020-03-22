import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyASP3i_oxmNp1DySil_66HeY7i1cSaKrXI",
  authDomain: "tacticalfba-4163a.firebaseapp.com",
  databaseURL: "https://tacticalfba-4163a.firebaseio.com",
  projectId: "tacticalfba-4163a",
  storageBucket: "tacticalfba-4163a.appspot.com",
  messagingSenderId: "920695674414",
  appId: "1:920695674414:web:6b0dbc6c9938bdd414b1bf",
  measurementId: "G-BN4MFW5GQJ"
};

firebase.initializeApp(config);

const auth = firebase.auth();
var actionCodeSettings = {
  url: 'https://tacticalfba.netlify.com/confirm',
  handleCodeInApp: true
};

const db = firebase.firestore();
const storage = firebase.storage();
export { db, auth, actionCodeSettings, storage };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgxzL3iY3-OUtD9ZpNtTB5UCbJeppmJXY",
  authDomain: "optwitterclone.firebaseapp.com",
  projectId: "optwitterclone",
  storageBucket: "optwitterclone.appspot.com",
  messagingSenderId: "21639890150",
  appId: "1:21639890150:web:4c5d5cdbd9118f5c1d6727",
  measurementId: "G-ND8N656KWM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

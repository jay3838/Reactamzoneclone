import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDWpJ1oQzq_NMjDimmADzSEplNYhMOokv8",
    authDomain: "eclone-27971.firebaseapp.com",
    projectId: "eclone-27971",
    storageBucket: "eclone-27971.appspot.com",
    messagingSenderId: "19693699419",
    appId: "1:19693699419:web:98ddae6ef3e9f7ce4bda7e",
    measurementId: "G-ZMMWH2Y60M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
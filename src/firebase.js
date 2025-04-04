import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCu9hPFFH9jXewcx8iLyOyNoC4ElyC86gU",
  authDomain: "instagran-clone-22e7d.firebaseapp.com",
  projectId: "instagran-clone-22e7d",
  storageBucket: "instagran-clone-22e7d.firebasestorage.app",
  messagingSenderId: "329264055306",
  appId: "1:329264055306:web:ba75c28b4c81e6f4a08bf3",
  measurementId: "G-3NJEEM5V8D"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();





export {db, auth, storage, functions};
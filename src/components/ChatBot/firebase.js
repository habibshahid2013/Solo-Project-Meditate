import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyD5qTK8TuimMvnCjRd4AAJ7bUVkHwyn8Uw",
  authDomain: "meditationapp-325404.firebaseapp.com",
  projectId: "meditationapp-325404",
  storageBucket: "meditationapp-325404.appspot.com",
  messagingSenderId: "1088152358297",
  appId: "1:1088152358297:web:619fe03d398cbfe1fb5708",
  measurementId: "G-GR48ZRF5SG"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
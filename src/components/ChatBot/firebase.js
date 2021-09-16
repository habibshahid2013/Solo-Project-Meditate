import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD5qTK8TuimMvnCjRd4AAJ7bUVkHwyn8Uw",
  authDomain: "meditationapp-325404.firebaseapp.com",
  projectId: "meditationapp-325404",
  storageBucket: "meditationapp-325404.appspot.com",
  messagingSenderId: "1088152358297",
  appId: "1:1088152358297:web:619fe03d398cbfe1fb5708",
  measurementId: "G-GR48ZRF5SG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth= getAuth();


export {db, auth};
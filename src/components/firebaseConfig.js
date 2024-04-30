// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMH_E_GhfRy1YDABEX7uz6E7tFJc7H3r0",
  authDomain: "carta-bruta.firebaseapp.com",
  databaseURL: "https://carta-bruta-default-rtdb.firebaseio.com",
  projectId: "carta-bruta",
  storageBucket: "carta-bruta.appspot.com",
  messagingSenderId: "327732188032",
  appId: "1:327732188032:web:dbb18875dbe8fa32d8a765",
  measurementId: "G-T2BTZREQ2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth , db };
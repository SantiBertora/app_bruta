import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrl2ITOzHzMDUeQ41cRGLnLoVFBV9xZ1c",
  authDomain: "bruta-43805.firebaseapp.com",
  projectId: "bruta-43805",
  storageBucket: "bruta-43805.appspot.com",
  messagingSenderId: "999249112974",
  appId: "1:999249112974:web:95c91f6b94d0d7efedbedf",
  measurementId: "G-XZ28MBB23X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

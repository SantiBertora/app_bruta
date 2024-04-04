import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { LanguageProvider } from './context/LanguageContext.jsx';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </React.StrictMode>,
)

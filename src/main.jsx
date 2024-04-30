import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { auth, db } from './components/firebaseConfig.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </React.StrictMode>,
)

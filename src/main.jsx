import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAflHf6JH2beio8Fq83NV90fPMQ1WC4cTc",
  authDomain: "electro-guepard.firebaseapp.com",
  projectId: "electro-guepard",
  storageBucket: "electro-guepard.appspot.com",
  messagingSenderId: "931205463599",
  appId: "1:931205463599:web:85a06b5643b7b1e23510da",
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

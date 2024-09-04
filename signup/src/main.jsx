import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { initializeApp } from "firebase/app";
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import './index.css'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
//https:firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAd37leaBL_2pWZePLvXXPI9Rx4CeF2Wg",
  authDomain: "signup-63dbd.firebaseapp.com",
  projectId: "signup-63dbd",
  storageBucket: "signup-63dbd.appspot.com",
  messagingSenderId: "250574088882",
  appId: "1:250574088882:web:4ed400f8e59c4a71b4f7ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

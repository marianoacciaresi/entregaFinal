import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKl93qq2_UZEEWYgtDPRPfJvxrdf2vU2Y",
  authDomain: "entregafinal-6afff.firebaseapp.com",
  projectId: "entregafinal-6afff",
  storageBucket: "entregafinal-6afff.appspot.com",
  messagingSenderId: "325044175361",
  appId: "1:325044175361:web:ac30bb2b1c0cdc72a7b600"  
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

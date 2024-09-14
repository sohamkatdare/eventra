// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_MVA1ldfuPjNofAr3c_oUWtliHMe34a8",
  authDomain: "eventra-da09c.firebaseapp.com",
  projectId: "eventra-da09c",
  storageBucket: "eventra-da09c.appspot.com",
  messagingSenderId: "374889076201",
  appId: "1:374889076201:web:14c2f5e5cb4306dcee6778",
  measurementId: "G-SD6EZ0DBLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}
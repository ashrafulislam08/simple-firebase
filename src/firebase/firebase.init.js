// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3wNhK_qi4TtwMR_6C8xRsF5cmwr06Pds",
  authDomain: "simple-firebase-a339f.firebaseapp.com",
  projectId: "simple-firebase-a339f",
  storageBucket: "simple-firebase-a339f.firebasestorage.app",
  messagingSenderId: "817072433352",
  appId: "1:817072433352:web:0c036ae8fe7895a6cb5dfd",
  measurementId: "G-NM8SEC3KXY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;

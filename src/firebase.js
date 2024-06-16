// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import GoogleAuthProvider

const firebaseConfig = {
  apiKey: "AIzaSyBcD7_O-saSQh-6j6M3agJj8Kta1Cpq4_Q",
  authDomain: "fms1-1d9a0.firebaseapp.com",
  databaseURL: "https://fms1-1d9a0-default-rtdb.firebaseio.com",
  projectId: "fms1-1d9a0",
  storageBucket: "fms1-1d9a0.appspot.com",
  messagingSenderId: "365681234573",
  appId: "1:365681234573:web:beb3ebca25003092c388c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Get the Auth instance from initialized app
export const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider
export default app; // Export the initialized Firebase app

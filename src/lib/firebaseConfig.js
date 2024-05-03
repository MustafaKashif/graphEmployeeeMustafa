// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPIVh5ka6wkkDL1lTSsWrTt4lHzqyQqVc",
  authDomain: "employeemustafa.firebaseapp.com",
  projectId: "employeemustafa",
  storageBucket: "employeemustafa.appspot.com",
  messagingSenderId: "313662176981",
  appId: "1:313662176981:web:43040559530813fa6f2c5c",
  measurementId: "G-NEHKKJ8667",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

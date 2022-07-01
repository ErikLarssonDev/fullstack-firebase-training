// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// TODO Make all inputs env variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "test-1-7a88c.firebaseapp.com",
  projectId: "test-1-7a88c",
  storageBucket: "test-1-7a88c.appspot.com",
  messagingSenderId: "217436298232",
  appId: "1:217436298232:web:985df3a2fb4cbcaf44940d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
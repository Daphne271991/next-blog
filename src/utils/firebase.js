// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-a52ce.firebaseapp.com",
  projectId: "blog-a52ce",
  storageBucket: "blog-a52ce.appspot.com",
  messagingSenderId: "1005971190421",
  appId: "1:1005971190421:web:a0e31fb5c15be691ade19c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

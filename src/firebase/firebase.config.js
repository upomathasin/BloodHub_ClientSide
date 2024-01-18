// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "need-blood-840ed.firebaseapp.com",
  projectId: "need-blood-840ed",
  storageBucket: "need-blood-840ed.appspot.com",
  messagingSenderId: "837547533225",
  appId: "1:837547533225:web:00c0746bd561177ba95ab8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

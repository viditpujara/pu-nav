// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxzbuNC3C87K6ZQgGKwB8RwX8fjwNJ504",
  authDomain: "pu-nav.firebaseapp.com",
  projectId: "pu-nav",
  storageBucket: "pu-nav.appspot.com",
  messagingSenderId: "614358234576",
  appId: "1:614358234576:web:3aa35f611b180b07cf35d5",
  measurementId: "G-TX7J3B38YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXDqkSgGgNNWxPyIneZDWxc1iUwXmIA0",
  authDomain: "todo-f4fd8.firebaseapp.com",
  projectId: "todo-f4fd8",
  storageBucket: "todo-f4fd8.appspot.com",
  messagingSenderId: "586719766599",
  appId: "1:586719766599:web:3cb19d87908b769a74e962",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

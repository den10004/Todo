import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEXDqkSgGgNNWxPyIneZDWxc1iUwXmIA0",
  authDomain: "todo-f4fd8.firebaseapp.com",
  projectId: "todo-f4fd8",
  storageBucket: "todo-f4fd8.appspot.com",
  messagingSenderId: "586719766599",
  appId: "1:586719766599:web:3cb19d87908b769a74e962",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

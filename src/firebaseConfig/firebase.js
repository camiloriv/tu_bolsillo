import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBr5LUx8ZM-jzqR1suNXHEUYPj3zvD051A",
  authDomain: "bolsillo-4b4ca.firebaseapp.com",
  projectId: "bolsillo-4b4ca",
  storageBucket: "bolsillo-4b4ca.appspot.com",
  messagingSenderId: "969208742374",
  appId: "1:969208742374:web:4300a04d74cc6f3f09d627"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

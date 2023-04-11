import { initializeApp } from "firebase/app";
import{getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlYNkpG-64rE9QRDVHXu0eawx66ShOuf4",
  authDomain: "tu-bolsillo-491cc.firebaseapp.com",
  projectId: "tu-bolsillo-491cc",
  storageBucket: "tu-bolsillo-491cc.appspot.com",
  messagingSenderId: "502002511174",
  appId: "1:502002511174:web:e91da6eed2ba69e7f98947",
  measurementId: "G-LWM389XE5G"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

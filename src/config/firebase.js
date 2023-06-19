
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBkRM-DDWxrNoc28ERgN6QYxd7G3jKGYT8",
  authDomain: "tiktok-jornadadev-9199a.firebaseapp.com",
  projectId: "tiktok-jornadadev-9199a",
  storageBucket: "tiktok-jornadadev-9199a.appspot.com",
  messagingSenderId: "130123167097",
  appId: "1:130123167097:web:bdd533d818ec758d462ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
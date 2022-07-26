// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7EcwbqZPKVjPCBvJPYwQRDfTPNC8HmBE",
  authDomain: "class-demo-7943e.firebaseapp.com",
  projectId: "class-demo-7943e",
  storageBucket: "class-demo-7943e.appspot.com",
  messagingSenderId: "600466537847",
  appId: "1:600466537847:web:5fe0ca49b88094090e7572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
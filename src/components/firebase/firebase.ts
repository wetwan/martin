// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_API_AUTHDOMINE,
  projectId: import.meta.env.VITE_FIREBASE_API_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_API_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_API_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;

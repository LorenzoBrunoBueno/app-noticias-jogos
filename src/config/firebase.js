import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbFAm8igi31hRH7wXc6_qM7SDKSjL95hw",
    authDomain: "projeto-jogos-83488.firebaseapp.com",
    projectId: "projeto-jogos-83488",
    storageBucket: "projeto-jogos-83488.appspot.com",
    messagingSenderId: "840680225559",
    appId: "1:840680225559:web:1b9d512fff1b3ee47f9552",
    measurementId: "G-2731PK63LK"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Analytics is optional and often client-side only

const firebaseConfig = {
    apiKey: "AIzaSyBBMfPNoPb8MVWVPonQeiq1g2xY58E9yDg",
    authDomain: "dom-henrique-restaurante-joane.firebaseapp.com",
    projectId: "dom-henrique-restaurante-joane",
    storageBucket: "dom-henrique-restaurante-joane.firebasestorage.app",
    messagingSenderId: "864635813162",
    appId: "1:864635813162:web:0bdee989c2aabc33c3f253",
    measurementId: "G-6J142WLP5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };

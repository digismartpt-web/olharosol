// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBibVyflJlGXHnYlZ7EjgXNX-aSMVFRINc",
    authDomain: "olhar-o-sol.firebaseapp.com",
    projectId: "olhar-o-sol",
    storageBucket: "olhar-o-sol.firebasestorage.app",
    messagingSenderId: "351435118169",
    appId: "1:351435118169:web:c7a016e430c60e5d6a8348",
    measurementId: "G-4FDQG2RR53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

export { app, db, auth, analytics };

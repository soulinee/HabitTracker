// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// is gewoon een object met de gegevens van mijn firebase project 
const firebaseConfig = {
  apiKey: "AIzaSyBb8bFDV1fw8wvliaUZ-mqwMZj1fX-zzVA",
  authDomain: "mobilehabittracker.firebaseapp.com",
  projectId: "mobilehabittracker",
  storageBucket: "mobilehabittracker.firebasestorage.app",
  messagingSenderId: "41268490312",
  appId: "1:41268490312:web:81977f69382ba806f0687d",
  
};

// Initialize Firebase maakt verbinding met firebase project
const app = initializeApp(firebaseConfig);
//dit haalt deAuthentication service op van mijn firebase app auth is een firebase object
export const auth = getAuth(app);
//dit haalt firestore service op van mijn firebase app
export const db = getFirestore(app);



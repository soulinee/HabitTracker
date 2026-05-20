// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb8bFDV1fw8wvliaUZ-mqwMZj1fX-zzVA",
  authDomain: "mobilehabittracker.firebaseapp.com",
  projectId: "mobilehabittracker",
  storageBucket: "mobilehabittracker.firebasestorage.app",
  messagingSenderId: "41268490312",
  appId: "1:41268490312:web:81977f69382ba806f0687d",
  measurementId: "G-29PKEMRC1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
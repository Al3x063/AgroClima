// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyFHAVXJrI6s0qepfxKahj0qRwrGY02fY",
  authDomain: "registros-ffb75.firebaseapp.com",
  projectId: "registros-ffb75",
  storageBucket: "registros-ffb75.appspot.com",
  messagingSenderId: "878204793334",
  appId: "1:878204793334:web:6f52186fef501cf96c97d7",
  measurementId: "G-041MG4CQTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
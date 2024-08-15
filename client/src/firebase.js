// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cc5b0.firebaseapp.com",
  projectId: "mern-estate-cc5b0",
  storageBucket: "mern-estate-cc5b0.appspot.com",
  messagingSenderId: "342493879308",
  appId: "1:342493879308:web:b464d4d1cc3208d3996229"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
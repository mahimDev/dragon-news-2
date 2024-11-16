// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzUvvNH4WWryV17UVKQ7ELpVh4vf4ek9E",
  authDomain: "dragon-news-e5be7.firebaseapp.com",
  projectId: "dragon-news-e5be7",
  storageBucket: "dragon-news-e5be7.firebasestorage.app",
  messagingSenderId: "105460005222",
  appId: "1:105460005222:web:cb2aaf930fe0eebbf430a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

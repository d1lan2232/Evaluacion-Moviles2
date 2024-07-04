// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWEMzN6aOmXAyIJzhJsosKe-ll8oicAFg",
  authDomain: "evaluacion1-cdb65.firebaseapp.com",
  projectId: "evaluacion1-cdb65",
  storageBucket: "evaluacion1-cdb65.appspot.com",
  messagingSenderId: "98817539951",
  appId: "1:98817539951:web:1b163d7eed3a8a633cb29a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
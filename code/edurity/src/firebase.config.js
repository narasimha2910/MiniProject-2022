// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg5D0wUOt7IHwGjZM6ujtZCpd56R8N24s",
  authDomain: "edurity-mini-project.firebaseapp.com",
  projectId: "edurity-mini-project",
  storageBucket: "edurity-mini-project.appspot.com",
  messagingSenderId: "106064906150",
  appId: "1:106064906150:web:6113723bfef95ce4bb7167",
  measurementId: "G-1V1M2XD88N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

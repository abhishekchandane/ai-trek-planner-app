// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0twV6pGvavllToCz586btZ3aAW4KjsQU",
  authDomain: "ai-trek-planner-app.firebaseapp.com",
  projectId: "ai-trek-planner-app",
  storageBucket: "ai-trek-planner-app.firebasestorage.app",
  messagingSenderId: "485388163314",
  appId: "1:485388163314:web:e6b62b3231cad5c8e2586b",
  measurementId: "G-75CTRX88F9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 


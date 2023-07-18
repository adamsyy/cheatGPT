// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC0l7cG7hF_dxDLfeQDyv8Manhn-s0qb4",
  authDomain: "cheatgpt-e4b9c.firebaseapp.com",
  projectId: "cheatgpt-e4b9c",
  storageBucket: "cheatgpt-e4b9c.appspot.com",
  messagingSenderId: "397953540740",
  appId: "1:397953540740:web:ad4a9b7770747347d618d1",
  measurementId: "G-6RJQ4LBTN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
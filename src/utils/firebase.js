// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNaf2QeX8b9rsBpYtpUrWw-mZggkzqREE",
  authDomain: "netflix-gpt-a5c19.firebaseapp.com",
  projectId: "netflix-gpt-a5c19",
  storageBucket: "netflix-gpt-a5c19.appspot.com",
  messagingSenderId: "959996116599",
  appId: "1:959996116599:web:0658c7ca91a6e9a34b9072",
  measurementId: "G-R8V9SG0GWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7sI5VxhltNJNOb2RrQ6-MHyKio0Bf808",
  authDomain: "clozzet-83e40.firebaseapp.com",
  projectId: "clozzet-83e40",
  storageBucket: "clozzet-83e40.appspot.com",
  messagingSenderId: "1075563735437",
  appId: "1:1075563735437:web:f7a206ce42adb3bdf6b5c4",
  measurementId: "G-0LVM0TSCNT"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
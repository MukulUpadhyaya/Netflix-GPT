// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFc_yguG6qOA7Fs1S7r2ygOT18-LU5sBg",
  authDomain: "netflixgpt-1334c.firebaseapp.com",
  projectId: "netflixgpt-1334c",
  storageBucket: "netflixgpt-1334c.appspot.com",
  messagingSenderId: "863500440950",
  appId: "1:863500440950:web:579ea6e7d2b51a71be9657",
  measurementId: "G-MTBZ1BVLRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0yjD3bEpR5O7RORg-eTdjbUQhkpr3thM",
  authDomain: "travel-agency-152dc.firebaseapp.com",
  projectId: "travel-agency-152dc",
  storageBucket: "travel-agency-152dc.appspot.com",
  messagingSenderId: "1063772475336",
  appId: "1:1063772475336:web:8d2ef01a6cc70b37a1bafd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
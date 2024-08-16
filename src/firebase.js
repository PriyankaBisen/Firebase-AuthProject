// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZYIa5FGZQAlw95gr63rQmanYOjQQjYQ8",
  authDomain: "authentication-1afb8.firebaseapp.com",
  projectId: "authentication-1afb8",
  storageBucket: "authentication-1afb8.appspot.com",
  messagingSenderId: "379249546661",
  appId: "1:379249546661:web:6d88d46bacfe8c993c844c"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export {auth}



import firebase from "firebase";
require("@firebase?firebase");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaGsubt0c0DtaLclKFpbGqSd5ra8Ue09s",
  authDomain: "e-library-68570.firebaseapp.com",
  projectId: "e-library-68570",
  storageBucket: "e-library-68570.appspot.com",
  messagingSenderId: "503643264484",
  appId: "1:503643264484:web:01df4ca07aeb769e8223f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
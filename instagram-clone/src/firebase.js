
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOwHTed06Pc4YlE5qk_Xt_Wx8i7dk4mJw",
  authDomain: "instagram-clone-db353.firebaseapp.com",
  projectId: "instagram-clone-db353",
  storageBucket: "instagram-clone-db353.appspot.com",
  messagingSenderId: "494131581749",
  appId: "1:494131581749:web:581417637c60e425b9727c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
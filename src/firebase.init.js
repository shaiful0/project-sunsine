// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnG33_8WOvGC5S--rZVzeBpvUaSyPS4ec",
  authDomain: "project-sunsine-c6986.firebaseapp.com",
  projectId: "project-sunsine-c6986",
  storageBucket: "project-sunsine-c6986.appspot.com",
  messagingSenderId: "480425368071",
  appId: "1:480425368071:web:154005ee66d2e76b2268a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
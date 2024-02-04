// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPlllWSmWIMO5ZtDzCxY_wcswIRM4Tk0U",
  authDomain: "todo-app-a5c3f.firebaseapp.com",
  projectId: "todo-app-a5c3f",
  storageBucket: "todo-app-a5c3f.appspot.com",
  messagingSenderId: "425020137889",
  appId: "1:425020137889:web:173663bad5ac3b75a46be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
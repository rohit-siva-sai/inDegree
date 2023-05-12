// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwT-YvwTK_sOhDciiV4n-u2PGfhdqjOJM",
  authDomain: "indegree-27816.firebaseapp.com",
  projectId: "indegree-27816",
  storageBucket: "indegree-27816.appspot.com",
  messagingSenderId: "827293495857",
  appId: "1:827293495857:web:574e419222423ae32edb10",
  measurementId: "G-453GT6T0Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
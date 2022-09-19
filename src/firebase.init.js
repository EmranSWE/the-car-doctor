// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUipittf71kJ6_89kOvHaMsVXxyUtr45Y",
  authDomain: "genius-car-services-84f83.firebaseapp.com",
  projectId: "genius-car-services-84f83",
  storageBucket: "genius-car-services-84f83.appspot.com",
  messagingSenderId: "849313504800",
  appId: "1:849313504800:web:0ba53d5469412e3517e645",
  measurementId: "G-YFTPWE2TTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;

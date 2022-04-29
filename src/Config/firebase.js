// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOW30WagfdjFFyBow7KPqcAHGLg07pdzM",
  authDomain: "appgregator-staging.firebaseapp.com",
  projectId: "appgregator-staging",
  storageBucket: "appgregator-staging.appspot.com",
  messagingSenderId: "829645738837",
  appId: "1:829645738837:web:4d9a9bec3d537be30395dc",
  measurementId: "G-5V4G12JDR9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };

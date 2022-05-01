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
	apiKey: "AIzaSyAugeNzXvnSWgqvIdUdkUWtaaaNeeads8g",
	authDomain: "appgregator.firebaseapp.com",
	projectId: "appgregator",
	storageBucket: "appgregator.appspot.com",
	messagingSenderId: "329011709740",
	appId: "1:329011709740:web:83923725ba091f3d488e89",
	measurementId: "G-MPFMH8SCW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };

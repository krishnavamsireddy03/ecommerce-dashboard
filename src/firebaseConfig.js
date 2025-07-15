// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// added these lines
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtddOy55mHf_nSJ2TWt1z5X1sBtABtVf8",
  authDomain: "ecommerce-dashboard-b2a70.firebaseapp.com",
  projectId: "ecommerce-dashboard-b2a70",
  storageBucket: "ecommerce-dashboard-b2a70.firebasestorage.app",
  messagingSenderId: "289714071684",
  appId: "1:289714071684:web:9960cb335dfcdd7ff8fad1",
  measurementId: "G-Y2CJ06987C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//changes
const auth = getAuth(app);
const db = getFirestore(app); 
export { auth, db };

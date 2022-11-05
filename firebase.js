// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAktCjHGttIEFAdPYCCrawZFfMRe17w1_I",
  authDomain: "zelleapp-31df6.firebaseapp.com",
  projectId: "zelleapp-31df6",
  storageBucket: "zelleapp-31df6.appspot.com",
  messagingSenderId: "517522662213",
  appId: "1:517522662213:web:194898a324c3c1bb50142c",
  measurementId: "G-ND3CEYXGGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
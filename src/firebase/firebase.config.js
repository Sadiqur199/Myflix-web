// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId 

  // apiKey: "AIzaSyClRbrsm9_bDRAsz34SU90qhP7Jc-BpSuU",
  // authDomain: "netflix-aa6bc.firebaseapp.com",
  // projectId: "netflix-aa6bc",
  // storageBucket: "netflix-aa6bc.appspot.com",
  // messagingSenderId: "471067227442",
  // appId: "1:471067227442:web:0d00e48d15449f5704532b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


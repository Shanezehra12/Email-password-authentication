import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 

const firebaseConfig = {
  apiKey: "AIzaSyBFNMpwYSOsAnJ2oh_bec6kJ7aedYYNBWw",
  authDomain: "react-authentication-a18a1.firebaseapp.com",
  projectId: "react-authentication-a18a1",
  storageBucket: "react-authentication-a18a1.appspot.com",
  messagingSenderId: "729020184589",
  appId: "1:729020184589:web:3611741d2f8de33a14bd44",
  measurementId: "G-TL78BXMZGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
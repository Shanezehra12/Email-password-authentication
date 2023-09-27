import {createContext, useEffect, useState, useContext} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState({});


  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  } 

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })

    return () => {
      unSubscribe();
    }
  }, [])

  return (
    <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, setUpRecaptcha}}>
      {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth () {
  return useContext(userAuthContext)
}
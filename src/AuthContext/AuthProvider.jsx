import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';




export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const singIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  const logOut = ()=>{
   setLoading(true)
   return signOut(auth)
  }

  const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth,loggedUser=>{
       setUser(loggedUser)
       setLoading(false)

    });
    return () =>{
      unSubcribe()
    }
  },[])

  const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleSignIn
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

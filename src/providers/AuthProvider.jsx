import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children  }) => {
const [loading,setLoading] = useState(true);
const [user,setUser] = useState(null);
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword( auth,email, password)
};
const signIn =(email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
};

const signWithGoogle =() =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}


   const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };


const signOutUser =()=>{
    setLoading(true);
    return signOut(auth);
};
const AuthInfo = {
    loading,
    createUser,
    user,
    signIn,
    signWithGoogle,
    signOutUser,
    updateUser,
    setUser

};

useEffect(()=>{
    const unSubcribe =  onAuthStateChanged(auth ,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
        unSubcribe()
    };
},[])



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;  
import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';




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
    signOutUser,
    updateUser

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
        <AuthContext value={AuthInfo}>
            {children }
        </AuthContext>
    );
};

export default AuthProvider;  
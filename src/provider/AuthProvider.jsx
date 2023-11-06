import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    //Create new user
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update username and image
    const updateUser = (name, photoLink) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoLink,
        });
    }
    //User Login
    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //User login via Google
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //User Signout
    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    //user tracking
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
             setUser(user);
             setIsLoading(false)
           });
 
         return () => {
             return unsubscribe();
         }
     },[])

    //This values will be pass to the whole Application
    const values = {
        user,
        isLoading,
        createUser,
        updateUser,
        login,
        googleLogin,
        logOut
    }



    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    //Create new user
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //User Login
    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //This values will be pass to the whole Application
    const values = {
        user,
        isLoading,
        createUser,
        login,
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false)
          });

        return () => {
            return unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
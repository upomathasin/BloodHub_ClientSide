import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Swal from "sweetalert2";
export const AuthContext = createContext(null);
export default function AuthContextProvider({ children }) {
  const auth = getAuth(app);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);
  const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };
  const value = {
    user: user,
    createUser: createUser,
    signInUser: signInUser,
    isLoading: isLoading,
    signOutUser: signOutUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

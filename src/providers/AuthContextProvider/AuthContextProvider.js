import React, { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";
export const AuthContext = createContext(null);
export default function AuthContextProvider({ children }) {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful !",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(userCredential.user);
      })
      .catch((err) => console.log(err));
  };

  const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful !",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        setUser(userCredential.user);
      })
      .catch((err) => console.log(err));
  };
  const value = {
    user: user,
    createUser: createUser,
    signInUser: signInUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthContextProvider/AuthContextProvider";

export default function useAdmin() {
  const { user, isLoading } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        await fetch(`http://localhost:5000/users/admin/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setIsAdmin(data);
          });
      }
    };
    checkAdmin();
  }, [user]);

  return [isAdmin];
}

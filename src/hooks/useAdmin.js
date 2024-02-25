import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthContextProvider/AuthContextProvider";

export default function useAdmin() {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  if (user?.email === "admin123@gmail.com" && user?.password === "Admin123*") {
    setIsAdmin(true);
  }

  return [isAdmin];
}

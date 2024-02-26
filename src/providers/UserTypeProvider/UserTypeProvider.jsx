import React, { createContext } from "react";
import useAdmin from "../../hooks/useAdmin";

export const UserTypeContext = createContext();
export default function UserTypeProvider({ children }) {
  const [isAdmin] = useAdmin();
  return (
    <UserTypeContext.Provider value={{ isAdmin: isAdmin }}>
      {children}
    </UserTypeContext.Provider>
  );
}

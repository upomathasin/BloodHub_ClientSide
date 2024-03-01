import React, { createContext, useContext } from "react";
import { useProfile } from "../../hooks/useProfile";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
export const UserProfileContext = createContext();

export default function UserProfileProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [userProfile, isPending, refetch, error] = useProfile(user?.email);
  return (
    <UserProfileContext.Provider
      value={{ userProfile, refetch, isPending, error }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}

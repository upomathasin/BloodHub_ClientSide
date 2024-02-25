import React, { Children, createContext } from "react";

export default function ProfileContextProvider({ children }) {
  const ProfileContext = createContext(null);

  return <ProfileContext.Provider>{children}</ProfileContext.Provider>;
}

import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";

export default function UserPrivateRoute({ children }) {
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    alert("Please Login !");
  }
}

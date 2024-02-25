import React, { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";

export default function AdminRoute({ children }) {
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const { user, isLoading } = useContext(AuthContext);

  if (user && isAdmin) {
    return children;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  } else {
    alert("You are not an admin !");
    return <Navigate to="/"></Navigate>;
  }
}

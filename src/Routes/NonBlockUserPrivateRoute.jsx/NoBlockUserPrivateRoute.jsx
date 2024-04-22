import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { Link } from "react-router-dom";

export default function NoBlockUserPrivateRoute({ children }) {
  const { user, isLoading } = useContext(AuthContext);

  const [isBlock, setIsBlock] = useState(false);
  useEffect(() => {
    const checkIsBlocked = async () => {
      if (user) {
        await fetch(
          `https://blood-hub-serverside-c6ln.vercel.app/users/checkStatus/${user.email}`
        )
          .then((res) => res.json())
          .then((data) => {
            setIsBlock(data);
          });
      }
    };
    checkIsBlocked();
  }, [user]);

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

  if (user && !isBlock) {
    return children;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://static.javatpoint.com/business/images/blocked-account.png"
          className="max-w-5xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Your are blocked by <span className="text-red-400">Admin</span>
          </h1>
          <p className="py-6 text-slate-800">
            Now you can not make a blood request. Please contact with admin for
            more information.
          </p>
          <button className="btn bg-red-400 text-white hover:bg-red-500">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { useLocation } from "react-router-dom";

export default function UserProfile() {
  const { user } = useContext(AuthContext);

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getUserProfile = () => {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserProfile(data));
    };

    if (user) {
      getUserProfile();
    }
  }, []);
  return (
    <div>
      {userProfile && (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div
                  className="bg-red-400 text-neutral-content rounded-sm w-80
                "
                >
                  <h1>
                    <span className="text-8xl text-white">
                      {userProfile.blood}
                    </span>
                  </h1>
                </div>
              </div>
              <div></div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">{userProfile.name}</h1>
              <p className="pt-4 pb-1">
                Blood Group:
                <span className=" ms-1 text-red-400">{userProfile.blood}</span>
              </p>
              <p className="py-1">
                Email:
                <span className=" ms-1 ">{userProfile.email}</span>
              </p>
              <p className="py-1">
                Phone Number:
                <span className=" ms-1">{userProfile.phone}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

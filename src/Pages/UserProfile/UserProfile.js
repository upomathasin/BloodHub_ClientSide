import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { json, useLocation, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { UserProfileContext } from "../../providers/UserProfileProvider/UserProfileProvider";
export default function UserProfile() {
  const { user } = useContext(AuthContext);

  const { userProfile, refetch, isPending, error } =
    useContext(UserProfileContext);
  const [updatedProfile, setUpdatedProfile] = useState(userProfile);
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-base-200">
      {userProfile && (
        <div className="hero-content flex-col lg:flex-row justify-center items-center">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-red-400 text-neutral-content rounded-sm lg:w-80">
                <h1>
                  <span className="lg:text-8xl text-5xl text-white p-2">
                    {userProfile.blood}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="lg:text-5xl text-3xl font-bold">
              {userProfile.name}
            </h1>
            <p className="pt-4 pb-1">
              Blood Group:
              <span className=" ms-1 text-red-400">{userProfile.blood}</span>
            </p>
            <p className="py-1">
              Last Blood Donation Date:
              <span className=" ms-1 ">{userProfile.lastDonate}</span>
            </p>
            <p className="py-1">
              Email:
              <span className=" ms-1 ">{userProfile.email}</span>
            </p>
            <p className="py-1">
              Phone Number:
              <span className=" ms-1">{userProfile.phone}</span>
            </p>
            <p className="py-1">
              Location:
              <span className=" ms-1">{userProfile.location}</span>
            </p>

            <button
              onClick={() =>
                navigate(`/userDash/updateProfile`, {
                  state: {
                    userProfile,
                    refetch,
                  },
                })
              }
            >
              <div className="flex justify-center items-center text-2xl space-x-1">
                {" "}
                <h1>Edit</h1> <FaUserEdit></FaUserEdit>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

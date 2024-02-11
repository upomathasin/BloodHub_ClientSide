import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { useLocation } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
export default function UserProfile() {
  const { user } = useContext(AuthContext);

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserProfile(data));
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
            </div>
            <div>
              <h1 className="text-5xl font-bold">{userProfile.name}</h1>
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

              {/* The button to open modal */}
              <label htmlFor="my_modal_7" className="btn">
                Edit Profile <FaUserEdit></FaUserEdit>
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <form className="dialog p-4 h-full border  bg-white m-4  border-slate-300">
                    <h1 className="text-xl text-slate-700 text-center font-bold">
                      Edit your Information
                    </h1>
                    <div className="flex justify-center items-center">
                      <FaUserEdit className=" text-7xl text-slate-800 " />
                    </div>{" "}
                    <label>Your Name :</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className=" w-full border p-2 my-2 rounded-sm"
                      name="u_name"
                      defaultValue={userProfile.name}
                    />
                    <br />
                    <label>Your Location:</label>
                    <input
                      name="u_location"
                      type="text"
                      placeholder="Enter Location"
                      className="w-full border p-2 my-2 rounded-sm"
                      defaultValue={userProfile.location}
                    />
                    <br />
                    <label>Your Last Blood Donation Date ("YYYY-MM-DD")</label>
                    <input
                      name="u_date"
                      type="text"
                      className="w-full border p-2 my-2 rounded-sm"
                      placeholder="YYYY-MM-DD"
                      defaultValue={userProfile.lastDonate}
                    />
                    <br />
                    <label>Your Phone Number:</label>
                    <input
                      name="u_phone"
                      type="text"
                      placeholder="Enter Location"
                      className="w-full border p-2 my-2 rounded-sm"
                      defaultValue={userProfile.phone}
                    />
                    <div className="form-control w-full  p-2 my-2 ">
                      <label className="cursor-pointer label">
                        <span className="label-text">
                          Available to donate blood
                        </span>
                        <input
                          type="checkbox"
                          name="available"
                          //checked={isChecked}
                          className="checkbox checkbox-error"
                          defaultChecked={userProfile.available}
                          // onChange={handleAvailablility}
                        />
                      </label>
                    </div>
                    <div className="flex justify-center">
                      {" "}
                      <button className="btn btn-sm my-3  bg-slate-700 rounded-none text-white">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

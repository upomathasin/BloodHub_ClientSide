import React, { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider/UserProfileProvider";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";

export default function UpdateProfile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { userProfile } = useContext(UserProfileContext);
  const [updatedProfile, setUpdatedProfile] = useState(userProfile);
  const handleUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const updated = { ...userProfile, [name]: value };
    setUpdatedProfile(updated);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/users/updateProfile/${user.email}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Updated Profile !!");
        navigate(`/userDash/userProfile/${user.email}`);
      });
  };
  return (
    <div className="flex  justify-center items-center">
      <form className="dialog p-5  lg:w-[500px] h-[580px] border shadow-sm  bg-white m-4  border-slate-300">
        <h1 className="text-xl text-slate-700 text-center font-bold">
          Edit your Information
        </h1>
        <div className="flex justify-center items-center">
          <FaUserEdit className=" lg:text-7xl text-slate-800 " />
        </div>{" "}
        <label>Your Name :</label>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          className=" w-full border p-2 my-2 rounded-sm"
          name="name"
          onChange={handleUpdate}
          defaultValue={userProfile.name}
        />
        <br />
        <label>Your Location:</label>
        <input
          name="location"
          onChange={handleUpdate}
          type="text"
          placeholder="Enter Location"
          className="w-full border p-2 my-2 rounded-sm"
          defaultValue={userProfile.location}
        />
        <br />
        <label>Your Last Blood Donation Date ("YYYY-MM-DD")</label>
        <input
          name="lastDonate"
          onChange={handleUpdate}
          type="text"
          className="w-full border p-2 my-2 rounded-sm"
          placeholder="YYYY-MM-DD"
          defaultValue={userProfile.lastDonate}
        />
        <br />
        <label>Your Phone Number:</label>
        <input
          name="phone"
          onChange={handleUpdate}
          type="text"
          placeholder="Enter Location"
          className="w-full border p-2 my-2 rounded-sm"
          defaultValue={userProfile.phone}
        />
        <div className="form-control w-full  p-2 my-2 ">
          <label className="cursor-pointer label">
            <span className="label-text">Available to donate blood</span>
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
          <button
            onClick={handleUpdateSubmit}
            className="btn btn-sm my-3  bg-slate-700 rounded-none text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

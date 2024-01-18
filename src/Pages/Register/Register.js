import React, { useContext } from "react";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
export default function Register() {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    console.log(e.target.group.value);
    e.preventDefault();
    createUser(e.target.email.value, e.target.password.value);
  };

  return (
    <div className="my-8  min-h-screen w-full flex  flex-col justify-center items-center">
      <h1 className=" font-bold text-4xl text-center my-4 text-slate-600 p-8">
        Registration Form
      </h1>
      <div className=" max-w-[450px] max-h-[600px] border bg-slate-100">
        <form
          onSubmit={handleRegister}
          className="p-4 h-full border text-center  bg-white m-8"
        >
          <img src="https://www.careinsurance.com/upload_master/media/posts/June2020/IQKrrYI3nqo0i9PNqO7W.jpg" />
          <div className="">
            {" "}
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border p-2 my-2 rounded-sm"
              name="email"
            />
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="w-full border p-2 my-2 rounded-sm"
            />
            <input
              name="phone"
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border p-2 my-2 rounded-sm"
            />
            <select
              name="group"
              className="select select-bordered rounded-none w-full "
            >
              <option disabled selected>
                Blood Group
              </option>
              <option value="a+">A+</option>
              <option value="b+">B+</option>
              <option value="ab+">AB+</option>
              <option value="b-">B-</option>
              <option value="a-">A-</option>
              <option value="o+">O+</option>
              <option value="o-">O-</option>
            </select>
          </div>
          <button
            className="btn btn-sm my-3"
            style={{ color: "white", backgroundColor: "rgb(198, 65, 76)" }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

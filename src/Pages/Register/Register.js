import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import Swal from "sweetalert2";
import { json } from "react-router-dom";
export default function Register() {
  const { createUser } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      location: e.target.location.value,
      blood: e.target.group.value,
      available: e.target.available.checked,
    };

    console.log(newUser);
    createUser(e.target.email.value, e.target.password.value)
      .then((userCredential) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful !",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(userCredential);

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => console.log(err));
  };

  const handleAvailablility = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className="  min-h-screen w-full flex flex-col md:flex-row  p-12 justify-center items-center"
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <div className=" max-w-[500px]">
        <h1 className=" font-bold text-2xl md:text-4xl text-center  text-slate-600 p-8 uppercase">
          Register and Join us to save life
        </h1>
      </div>
      <div className=" border shadow mb-8 max-w-[450px] max-h-[700px]  border-slate-300 bg-slate-100">
        <form
          onSubmit={handleRegister}
          className="p-4 h-full border text-center  bg-white m-8  border-slate-300"
        >
          <img src="https://www.careinsurance.com/upload_master/media/posts/June2020/IQKrrYI3nqo0i9PNqO7W.jpg" />
          <div className="">
            {" "}
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border p-2 my-2 rounded-sm"
              name="name"
            />
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border p-2 my-2 rounded-sm me-2"
                name="email"
              />
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full border p-2 my-2 rounded-sm"
              />
            </div>
            <div className="flex ">
              <input
                name="phone"
                type="text"
                placeholder="Enter Phone Number"
                className="w-full border p-2 my-2 rounded-sm me-2"
              />
              <input
                name="location"
                type="text"
                placeholder="Enter Location"
                className="w-full border p-2 my-2 rounded-sm"
              />
            </div>
            <select
              name="group"
              className="select select-bordered rounded-none w-full "
            >
              <option disabled selected>
                Blood Group
              </option>
              <option defaultValue="a+">A+</option>
              <option defaultValue="b+">B+</option>
              <option defaultValue="ab+">AB+</option>
              <option defaultValue="b-">B-</option>
              <option defaultValue="a-">A-</option>
              <option defaultValue="o+">O+</option>
              <option defaultValue="o-">O-</option>
            </select>
          </div>

          <div className="form-control w-full  p-2 my-2 ">
            <label className="cursor-pointer label">
              <span className="label-text">Available to donate blood</span>
              <input
                type="checkbox"
                name="available"
                checked={isChecked}
                className="checkbox checkbox-error"
                onChange={handleAvailablility}
              />
            </label>
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

import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { UserTypeContext } from "../../providers/UserTypeProvider/UserTypeProvider";

export default function Login() {
  const { signInUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAdmin } = useContext(UserTypeContext);
  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(e.target.email.value, e.target.password.value)
      .then((userCredential) => {
        console.log(userCredential.user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful !",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });

    // if (!isAdmin) {
    //   navigate(`/userProfile/${user.email}`, {
    //     state: { uid: user.uid },
    //   });
    // }
  };
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row  justify-center items-center  "
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <div className=" max-w-[500px]">
        <h1 className=" font-bold text-2xl text-center  text-slate-600 p-8 uppercase md:text-4xl">
          Login to update your profile
        </h1>
      </div>
      <div className="  max-w-[400px] max-h-[400px] border border-slate-300 bg-slate-100">
        <form
          onSubmit={handleLogin}
          className="p-4 h-full border text-center border-slate-300  bg-white m-8"
        >
          <img src="https://www.careinsurance.com/upload_master/media/posts/June2020/IQKrrYI3nqo0i9PNqO7W.jpg" />
          <div className="">
            {" "}
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="w-full border p-2 my-2 rounded-sm"
            />
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="w-full border p-2 my-2 rounded-sm"
            />
          </div>
          <button
            className="btn btn-sm my-2"
            style={{ color: "white", backgroundColor: "rgb(198, 65, 76)" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

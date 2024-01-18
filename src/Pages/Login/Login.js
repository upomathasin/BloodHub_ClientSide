import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";

export default function Login() {
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(e.target.email.value, e.target.password.value);
  };
  return (
    <div className="  min-h-screen w-full flex  flex-col justify-center items-center">
      <h1 className=" font-bold text-4xl text-center my-4 text-slate-600">
        Login Form
      </h1>
      <div className=" max-w-[400px] max-h-[400px] border bg-slate-100">
        <form
          onSubmit={handleLogin}
          className="p-4 h-full border text-center  bg-white m-8"
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

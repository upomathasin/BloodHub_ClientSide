import React, { useContext } from "react";
import { BiDonateBlood } from "react-icons/bi";
import { Link, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import useAdmin from "../../hooks/useAdmin";
import { UserTypeContext } from "../../providers/UserTypeProvider/UserTypeProvider";
export default function Navbar() {
  const { user, isLoading, signOutUser } = useContext(AuthContext);
  const { isAdmin } = useContext(UserTypeContext);

  const navigate = useNavigate();
  console.log(user, isLoading);
  return (
    <div>
      <div className="navbar bg-base-100 shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/findDonors">Find Donors</Link>
              </li>

              <li>
                <Link to="/requestBlood">Request Blood</Link>
              </li>
              {user && !isAdmin && (
                <li>
                  <Link to="/userProfile/:email">Your Profile</Link>
                </li>
              )}

              {!user && (
                <div className="flex ">
                  {" "}
                  <li>
                    <Link to="register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </div>
              )}
              {user && isAdmin && (
                <li>
                  <Link to="/adminDash"> Admin Dash</Link>
                </li>
              )}

              {user && !isAdmin && (
                <li>
                  <Link to="/userDash"> User Dash</Link>
                </li>
              )}

              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">
            <BiDonateBlood
              style={{ color: "rgb(198, 65, 76)" }}
            ></BiDonateBlood>{" "}
            Blood Hub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && !isAdmin && isLoading && (
              <li>
                <Link to="/userProfile/:email">Your Profile</Link>
              </li>
            )}
            <li>
              <Link to="/findDonors">Find Donors</Link>
            </li>

            <li>
              <Link to="/requestBlood">Request Blood</Link>
            </li>
            {user && isAdmin && (
              <li>
                <Link to="/adminDash"> Admin Dash</Link>
              </li>
            )}

            {user && !isAdmin && (
              <li>
                <Link to="/userDash"> User Dash</Link>
              </li>
            )}

            {!user && (
              <div className="flex">
                <li>
                  <Link to="register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </div>
            )}
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <button
              onClick={() => {
                alert("Logout..");
                navigate("/");
                signOutUser();
              }}
              className="btn"
              style={{ color: "white", backgroundColor: "rgb(198, 65, 76)" }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

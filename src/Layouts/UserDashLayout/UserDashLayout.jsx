import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { GiHamburgerMenu } from "react-icons/gi";
export default function UserDashLayout() {
  const { user } = useContext(AuthContext);

  //   <div className="flex h-full  ">
  //   <div className="w-full ">
  //     {" "}
  //     <div className=" drawer drawer-open ">
  //       <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  //       <div className="drawer-content">
  //         <Outlet></Outlet>
  //       </div>
  //       <div className="drawer-side">
  //         <label
  //           htmlFor="my-drawer"
  //           aria-label="close sidebar"
  //           className="lg-drawer-open "
  //         ></label>
  //         <ul className="menu p-4 w-60 lg:w-80 min-h-full bg-base-700 text-base-content">
  //           {/* Sidebar content here */}
  //   <li>
  //     <Link to={`/userDash/userProfile/${user.email}`}>
  //       {" "}
  //       Your Profile
  //     </Link>
  //   </li>
  //   <li>
  //     <a>Sidebar Item 2</a>
  //   </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Navbar Title</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to={`/userDash/userProfile/${user.email}`}>
                  {" "}
                  Your Profile
                </Link>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link to={`/userDash/userProfile/${user.email}`}>
              {" "}
              Your Profile
            </Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

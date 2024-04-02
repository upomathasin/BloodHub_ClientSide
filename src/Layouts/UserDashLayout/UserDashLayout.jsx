import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
export default function UserDashLayout() {
  const { user } = useContext(AuthContext);

  return (
    <div className=" h-full    ">
      <div className="  w-full drawer drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className=" w-full drawer-content  ">
          {/* Page content here */}
          <Outlet> </Outlet>
        </div>
        <div className=" drawer-side  ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="lg-drawer-open"
          ></label>
          <ul className=" lg:w-80  sm:w-60  h-full menu py-4  bg-slate-700 text-white">
            {/* Sidebar content here */}
            <li>
              <Link to={`/`}>
                {" "}
                <FaHome></FaHome> Home
              </Link>
            </li>
            <li>
              <Link to={`/userDash/userProfile/${user.email}`}>
                {" "}
                <FaUserCircle></FaUserCircle> Your Profile
              </Link>
            </li>
            <li>
              <Link to={`/userDash/requestBlood`}>
                {" "}
                <BiDonateBlood></BiDonateBlood> Request Blood
              </Link>
            </li>
            <li>
              <Link to={`/userDash/myRequests`}>
                {" "}
                <MdBloodtype></MdBloodtype> My Blood Request
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { LiaUsersCogSolid } from "react-icons/lia";
export default function AdminDashLayout() {
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
              <Link to="/adminDash/manageUsers" className="font-bold">
                <LiaUsersCogSolid></LiaUsersCogSolid> <h1>Manage Users</h1>
              </Link>
            </li>
            <li>
              <a> Donation Requests</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

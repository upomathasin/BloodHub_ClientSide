import React from "react";
import useAdmin from "../../hooks/useAdmin";

export default function AdminDash() {
  return (
    <div className="grid bg-red-700 h-full   ">
      <div className="">
        {" "}
        <div className=" drawer drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">{/* Page content here */}</div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="lg-drawer-open"
            ></label>
            <ul className="menu p-4  min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="  bg-red-700 ">
        <div>
          {" "}
          <h1 className="h1"> Upoma</h1>
        </div>
      </div>
    </div>
  );
}

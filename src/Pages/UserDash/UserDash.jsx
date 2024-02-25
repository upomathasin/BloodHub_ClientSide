import React from "react";

export default function UserDash() {
  return (
    <div className="flex h-full  ">
      <div className="w-64">
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
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
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

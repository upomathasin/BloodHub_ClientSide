import React from "react";
import useAdmin from "../../hooks/useAdmin";
import { Link, Outlet } from "react-router-dom";

export default function AdminDash() {
  return (
    <div>
      <div className="hero min-h-screen bg-slate-200">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Welcome <span className="text-red-500">Admin !!</span>
            </h1>
            <p className="mb-5">
              Thank you for your dedication to the blood donation app. As an
              admin, you have access to important features and functionalities
              to manage the application effectively. Explore the dashboard to
              view and manage donor information, track donation records, and
              perform other administrative tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

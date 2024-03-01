import React from "react";
import useAdmin from "../../hooks/useAdmin";

export default function AdminDash() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://mydr.com.au/wp-content/uploads/2019/04/blood_donation_transfusion_750.jpg)`,
        }}
        className="hero min-h-screen    "
      >
        <div className="hero-overlay bg-opacity-60 bg-slate-900"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 lg:text-5xl font-bold text-3xl text-white">
              Welcome <span className="text-red-500">Admin !!</span>
            </h1>
            <p className="mb-5 lg:text-2xl text-lg text-white">
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

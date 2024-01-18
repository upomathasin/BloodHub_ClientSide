import React from "react";
import { Link } from "react-router-dom";

export default function TopBanner() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/23R5S1K/blood.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Donate Your Blood to Us, Save More Life Together
          </h1>
          <p className="mb-5"></p>
          <button
            className="btn   border-0"
            style={{ color: "white", backgroundColor: "rgb(198, 65, 76)" }}
          >
            <Link to="/register">Join Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

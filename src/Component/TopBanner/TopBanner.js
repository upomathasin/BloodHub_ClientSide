import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TopBanner() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/23R5S1K/blood.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md" data-aos="zoom-in">
          <h1 className="mb-5 text-5xl  text-white">
            Donate Your <span style={{ color: "rgb(198, 65, 76)" }}>Blood</span>{" "}
            to Us, Save More Life Together
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

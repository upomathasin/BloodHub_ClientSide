import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default function ParalaxSection() {
  return (
    <ParallaxBanner
      className="hero-overlay  "
      layers={[
        {
          image:
            "https://marvel-b1-cdn.bc0a.com/f00000000290269/www.riversideonline.com/-/media/patients-and-visitors/healthy-you/blood-donation.ashx",
          speed: -20,
        },
      ]}
    >
      <div className="hero min-h-screen  ">
        <div className="hero-overlay   "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[1/2]  text-slate-800 bg-white p-5 bg-opacity-50 ">
            <h1 className="mb-1 text-2xl     font-bold">Join Us</h1>
            <h1 className="mb-5 text-5xl font-bold uppercase ">
              Become a Blood Donor
            </h1>
            <p className="mb-5 text-slate-700 text-bold">
              Donating blood saves lives by supplying essential resources for
              medical treatments and emergencies, promoting community health
              through voluntary contributions. Regular donations ensure a
              reliable blood supply for patients in need.
            </p>
            <button className="btn bg-white rounded-none text-red-400">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
}

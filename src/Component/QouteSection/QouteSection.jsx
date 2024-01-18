import React from "react";
import { BiDonateBlood } from "react-icons/bi";

export default function QouteSection() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md  flex flex-col justify-center items-center ">
          <BiDonateBlood
            className="text-5xl"
            style={{ color: "rgb(198, 65, 76)" }}
          ></BiDonateBlood>{" "}
          <p className="py-6 text-4xl">
            {" "}
            One bag of blood can bring back one from the dead.
          </p>
        </div>
      </div>
    </div>
  );
}

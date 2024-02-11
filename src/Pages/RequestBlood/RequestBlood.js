import React, { useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
export default function RequestBlood() {
  const [bloodRequest, setBloodRequest] = useState({
    blood: "",
    location: "",
    date: "",
    phone: "",
  });

  const handleBloodRequest = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Send Request For Blood </h1>
          <p className="py-6">
            We warmly encourage you to submit a blood request or directly
            connect with our dedicated registered blood donors. Your
            compassionate outreach plays a crucial role in making a positive
            impact on lives in need.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <input
                name="date"
                type="date"
                className="w-full border p-2   rounded-sm"
                placeholder="date"
              />
            </div>
            <div className="form-control">
              <select
                name="blood"
                className="select select-bordered rounded-none w-full my-2 "
              >
                <option disabled selected>
                  Blood Group
                </option>
                <option defaultValue="a+">A+</option>
                <option defaultValue="b+">B+</option>
                <option defaultValue="ab+">AB+</option>
                <option defaultValue="b-">B-</option>
                <option defaultValue="a-">A-</option>
                <option defaultValue="o+">O+</option>
                <option defaultValue="o-">O-</option>
              </select>
            </div>

            <div className="form-control">
              <input
                name="location"
                type="text"
                className="w-full border p-2 rounded-sm"
                placeholder="Address "
              />
            </div>
            <div className="form-control">
              <input
                name="phone"
                type="text"
                className="w-full border p-2 rounded-sm"
                placeholder="Phone Number "
              />
            </div>

            <div className="form-control mt-6">
              <button
                className="btn text-white rounded-none"
                style={{ backgroundColor: "rgb(198, 65, 76)" }}
              >
                Request <BiSolidDonateBlood></BiSolidDonateBlood>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

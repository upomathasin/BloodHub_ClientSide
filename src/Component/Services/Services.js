import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";
export default function Services() {
  return (
    <div
      className="grid  grid-cols-1 lg:grid-cols-3 justify-center items-center p-12"
      style={{ backgroundColor: "rgb(198, 65, 74)" }}
    >
      <div className="card w-96 bg-base-100 shadow-xl rounded-none flex flex-col justify-center items-center pt-10">
        <BiDonateBlood
          className="text-4xl"
          style={{ color: "rgb(198, 65, 76)" }}
        ></BiDonateBlood>
        <div className="card-body">
          <h2 className="card-title">Donate Blood</h2>
          <p></p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-none flex flex-col justify-center items-center pt-10">
        <FaUsersViewfinder
          className="text-4xl"
          style={{ color: "rgb(198, 65, 76)" }}
        ></FaUsersViewfinder>
        <div className="card-body">
          <h2 className="card-title">Find Blood Donor</h2>
          <p></p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-none flex flex-col justify-center items-center pt-10">
        <MdMedicalServices
          className="text-4xl"
          style={{ color: "rgb(198, 65, 76)" }}
        ></MdMedicalServices>
        <div className="card-body">
          <h2 className="card-title">Donate Blood</h2>
          <p></p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

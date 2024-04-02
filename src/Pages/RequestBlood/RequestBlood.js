import React, { useContext, useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function RequestBlood() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bloodRequest, setBloodRequest] = useState({
    blood: "",
    location: "",
    date: "",
    phone: "",
    requestedBy: user?.email,
    status: "pending",
  });

  const handleRequestChange = (e) => {
    const request = {
      ...bloodRequest,
      [e.target.name]: e.target.value,
    };
    setBloodRequest(request);
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/users/bloodRequest`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bloodRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Blood request successfully submitted !",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/userDash/myRequests");
      });
  };

  return (
    <div className="bg-base-200 p-8">
      <div className="hero min-h-screen ">
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
                  onChange={handleRequestChange}
                />
              </div>
              <div className="form-control">
                <select
                  name="blood"
                  className="select select-bordered rounded-none w-full my-2 "
                  onChange={handleRequestChange}
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
                  onChange={handleRequestChange}
                />
              </div>
              <div className="form-control">
                <input
                  name="phone"
                  type="text"
                  className="w-full border p-2 rounded-sm"
                  placeholder="Phone Number "
                  onChange={handleRequestChange}
                />
              </div>

              <div className="form-control mt-6">
                <button
                  onClick={handleRequest}
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
    </div>
  );
}

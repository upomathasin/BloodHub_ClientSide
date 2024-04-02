import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { Link } from "react-router-dom";

export default function MyRequests() {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myRequests/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("My requests", data);
        setRequests(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myRequests/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => alert("Deleted Request"));
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="mb-8 flex flex-col justify-center items-center my-4 ">
        <h1 className=" text-4xl text-slate-600">
          {" "}
          My <span className=" text-red-400">Blood</span> Requests
        </h1>
        {requests.length == 0 && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="my-4 text-3xl text-slate-500">
              You don't have any blood request !
            </h1>
            <button className="bg-red-400 text-white btn">
              <Link to="/userDash/requestBlood">Request Blood</Link>
            </button>
          </div>
        )}
      </div>
      {requests.length != 0 && (
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="  text-slate-500">
                <th></th>
                <th>Date</th>
                <th>Phone Number</th>
                <th>Requested Blood Group</th>
                <th>Location</th>
                <th>Request Status</th>
                <th>Delete Request</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {requests.length != 0 &&
                requests.map((request, index) => {
                  return (
                    <tr key={request.id}>
                      <th>{index + 1}</th>
                      <td>{request.date.toString()}</td>
                      <td>{request.phone}</td>
                      <td>{request.blood}</td>
                      <td>{request.location}</td>
                      <td>
                        <button className=" btn btn-sm btn-error text-white">
                          {request.status}
                        </button>
                      </td>
                      <th>
                        <button
                          onClick={() => handleDelete(request.id)}
                          className="text-center"
                        >
                          X
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

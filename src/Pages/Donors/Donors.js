import React, { useEffect, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";

export default function Donors() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div className=" bg-slate-800  w-full h-[300px] flex justify-center items-center">
        <IoSearchCircle className="text-7xl text-red-500" />
        <h1 className="text-7xl text-red-500"> Find Donors</h1>
      </div>

      <div className="overflow-x-auto border m-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Blood Group</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user) => (
              <tr>
                <th>
                  <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-red-400 text-neutral-content rounded-sm w-12">
                        <span className="text-xl">{user.blood}</span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </th>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <th>
                  <button
                    className={`btn ${
                      user.available ? "bg-green-400" : "btn-error"
                    } btn-xs`}
                  >
                    {`${user.available ? "Available" : "Not Available"}`}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

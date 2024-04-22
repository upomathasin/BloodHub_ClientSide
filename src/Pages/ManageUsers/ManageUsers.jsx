import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import Swal from "sweetalert2";
import { IoMdArrowDropdown } from "react-icons/io";
export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("All");
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const newUsers = data.filter((d) => d.email !== user.email);
        setUsers(newUsers);
      });
  }, [users]);

  const handleChangeRole = async (user, newRole) => {
    await fetch(
      `https://blood-hub-serverside-c6ln.vercel.app/${user.email}/changeRole`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updatedRole: newRole }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(`Role of ${user.name} has been changed to ${newRole}!`);
      });
  };
  const handleStatusChange = async (user) => {
    let updatedStatus = user.status == "Active" ? "Block" : "Active";
    await fetch(
      `https://blood-hub-serverside-c6ln.vercel.app/${user.email}/changeStatus`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updatedStatus: updatedStatus }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          `Status of ${user.name} has been changed to ${updatedStatus}!`
        );
      });
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl my-7 text-slate-700"> Manage Users</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="overflow-x-auto border m-12 ">
          <table className="table  table-md">
            <thead>
              <th>
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn  flex btn-sm w-full"
                  >
                    <h1> {searchTerm} Users</h1>{" "}
                    <IoMdArrowDropdown></IoMdArrowDropdown>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button onClick={() => setSearchTerm("All")}>
                        All Users
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setSearchTerm("Active")}>
                        Only Active Users
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setSearchTerm("Block")}>
                        Blocked Users
                      </button>
                    </li>
                  </ul>
                </div>
              </th>
            </thead>
            <thead>
              <tr>
                <th>
                  <label>Blood Group</label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Change Role</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {console.log("users", users)}
              {users &&
                users
                  .filter((user) => {
                    if (searchTerm == "All") {
                      return user;
                    } else if (searchTerm == "Active") {
                      return user.status == "Active";
                    } else if (searchTerm == "Block") {
                      return user.status == "Block";
                    }
                  })

                  .map((user) => (
                    <tr>
                      <th>
                        <div className="flex items-center gap-3">
                          <div className="avatar placeholder">
                            <div className="bg-red-400 text-white rounded-sm w-12">
                              <span className="text-xl">{user.blood}</span>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </th>

                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <div className="dropdown dropdown-hover dropdown-top">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-sm bg-white w-20"
                          >
                            {user.role}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <button
                                onClick={() =>
                                  handleChangeRole(user, "Volunteer")
                                }
                              >
                                Make Volunteer
                              </button>
                            </li>

                            <li>
                              <button
                                onClick={() => handleChangeRole(user, "Admin")}
                              >
                                Make Admin
                              </button>
                            </li>

                            <li>
                              <button
                                onClick={() => handleChangeRole(user, "Donor")}
                              >
                                Make Donor
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <button
                          onClick={() => handleStatusChange(user)}
                          className={`btn-sm  text-white  font-bold ${
                            user.status == "Active"
                              ? "bg-green-500"
                              : "bg-red-400"
                          }`}
                        >
                          {user.status}
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

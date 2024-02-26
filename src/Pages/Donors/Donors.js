import React, { useEffect, useState } from "react";

export default function Donors() {
  const [users, setUsers] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [showAllusers, setShowAllUsers] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSearch = (e) => {
    setSearchedTerm(e.target.value);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://hsiassetstorage.sfo2.digitaloceanspaces.com/assets/images/blog/_1200x630_crop_center-center_none/Blood-Donor-Month.png)`,
        }}
        className="bg-cover bg-fixed w-full h-[400px] flex flex-col justify-center items-center"
      >
        <div className=" bg-slate-900 w-full  bg-opacity-40 p-10  mx-8">
          <h1 className=" text-center text-7xl text-red-500">
            {" "}
            Find Blood Donors
          </h1>

          <div className="flex justify-center items-center mt-3">
            <input
              type="text"
              placeholder="Search Donor By Blood Group ..."
              className="input input-bordered input-error w-full max-w-xs"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div>
        <div role="tablist" className="tabs tabs-bordered">
          <a role="tab" className="tab">
            <button
              onClick={() => setShowAllUsers(true)}
              className="text-red-400"
            >
              All Users
            </button>
          </a>

          <a role="tab" className="tab ">
            <button
              className="text-red-400"
              onClick={() => setShowAllUsers(false)}
            >
              Donor who don't donate blood within 3 months?
            </button>
          </a>
        </div>
      </div>

      <div className="overflow-x-auto border m-12 ">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>Blood Group</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Last Donate</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {console.log("users", users)}
            {users &&
              users
                .filter((user) => {
                  if (showAllusers) {
                    return user.blood.toLowerCase().includes(searchedTerm);
                  } else {
                    let today = new Date();
                    let threeMonAgo = new Date();
                    threeMonAgo.setMonth(today.getMonth() - 3);
                    let donationDate = new Date(user.lastDonate);

                    if (donationDate >= threeMonAgo) {
                      return user.blood.toLowerCase().includes(searchedTerm);
                    }
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
                    <td>{user.phone}</td>
                    <td>{user.lastDonate}</td>
                    <th>
                      <button
                        className={` text-xl ${
                          user.available ? "text-slate-400" : "text-slate-500"
                        } btn-xs`}
                      >
                        {`${
                          user.available ? ` ${user.location}` : "Not Available"
                        }`}
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

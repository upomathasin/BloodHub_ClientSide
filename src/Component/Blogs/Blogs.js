import React from "react";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
export default function Blogs() {
  const Blogs = [
    {
      title: "Become a Donor",
      img: "https://i.ibb.co/dPqs8C0/Blood-Donation-2.jpg",

      des: "Join our community of donors and make a meaningful impact by contributing to blood donation initiatives. Your generosity can save lives and create a healthier future for those in need.",
    },
    {
      title: "Why Give Blood",
      img: "https://i.ibb.co/3m7hj17/blood3.jpg",

      des: "Discover the compelling reasons behind blood donation. From supporting medical treatments to emergency responses, giving blood is a simple yet powerful way to make a positive difference in the world.",
    },
    {
      title: "How your donation helps",
      img: "https://i.ibb.co/23R5S1K/blood.jpg",
      des: "Learn about the various ways your blood donation can have a lasting impact. Whether it's aiding patients in critical conditions or ensuring a stable blood supply, your contribution plays a vital role in healthcare and community well-being.",
    },
  ];

  return (
    <div className="p-10">
      <div>
        {" "}
        <h1 className="text-5xl text-center">Blogs</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3  gap-4 my-10">
        {Blogs.map((blog) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={blog.img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.des}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-error">
                    <Link to="/">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

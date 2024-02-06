import React, { useState } from "react";

export default function About() {
  const [LearnMore, setLearnMore] = useState(false);
  const handleLearnMore = () => {
    setLearnMore(!LearnMore);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl text-justify">
          <div>
            <h1 className="text-5xl font-bold">
              About <span className="text-red-400">Blood Hub</span>
            </h1>
            <p className="py-6">
              {" "}
              We believe in the power of connection and compassion. Our platform
              is more than just a website; it's a community-driven space
              dedicated to making a positive impact on lives through the vital
              act of blood donation.
            </p>
          </div>
          {LearnMore && (
            <div>
              <h1 className="text-5xl font-bold"> How it Works </h1>
              <p className="py-6">
                {" "}
                Blood Hub simplifies the process of blood donation. Whether
                you're looking to donate, seeking blood for a loved one, or just
                want to stay informed, our user-friendly platform provides the
                tools and resources you need. Join the Blood Hub Community
                Become a part of something life-changing. Join Blood Hub today
                and contribute to a world where every heartbeat is a testament
                to human kindness. Thank you for being a part of the Blood Hub
                family.
              </p>
            </div>
          )}

          <div className=" flex justify-center">
            <button
              onClick={handleLearnMore}
              className="btn  btn-sm border border-slate-600 "
            >{`${LearnMore ? "Show Less" : "Learn More"}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

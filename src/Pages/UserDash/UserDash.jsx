import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthContextProvider/AuthContextProvider";
import { useProfile } from "../../hooks/useProfile";

export default function UserDash() {
  const { user, isLoading } = useContext(AuthContext);

  const [userProfile] = useProfile(user.email);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1252380604/photo/note-paper-with-blood-donation-concept-on-red-background.jpg?s=612x612&w=0&k=20&c=fNez5pcNYKtY1b67gUxC117iZa5OGq5W2zPYW7uZ65I=)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className=" font-bold text-5xl ">Welcome</h1>
            <br></br>
            <h1 className="  text-teal-600 text-5xl font-bold">
              {userProfile.name}
            </h1>
            <p className="mb-5">
              As a
              <span className=" text-teal-600 font-bold">
                {" "}
                {userProfile.role}
              </span>{" "}
              you are doing amazing job. Keep doing good works for humanity.
              Your generous blood donation has made a meaningful impact,
              potentially saving lives. Your selfless contribution embodies
              compassion and community support. Thank you for making a
              difference through your kindness and generosity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

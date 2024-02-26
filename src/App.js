import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import Routes from "./Routes/Routes";
import AuthContextProvider from "./providers/AuthContextProvider/AuthContextProvider";

import React from "react";
import UserTypeProvider from "./providers/UserTypeProvider/UserTypeProvider";

export default function App() {
  return (
    <div>
      {" "}
      <AuthContextProvider>
        <UserTypeProvider>
          <ParallaxProvider>
            {" "}
            <Routes></Routes>
          </ParallaxProvider>
        </UserTypeProvider>
      </AuthContextProvider>
    </div>
  );
}

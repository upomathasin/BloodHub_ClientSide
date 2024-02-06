import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import Routes from "./Routes/Routes";
import AuthContextProvider from "./providers/AuthContextProvider/AuthContextProvider";

import React from "react";

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        {" "}
        <ParallaxProvider>
          {" "}
          <Routes></Routes>
        </ParallaxProvider>
      </AuthContextProvider>
    </div>
  );
}

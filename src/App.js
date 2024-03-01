import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import Routes from "./Routes/Routes";
import AuthContextProvider from "./providers/AuthContextProvider/AuthContextProvider";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserTypeProvider from "./providers/UserTypeProvider/UserTypeProvider";
import UserProfileProvider from "./providers/UserProfileProvider/UserProfileProvider";

export default function App() {
  const Client = new QueryClient();
  return (
    <div>
      {" "}
      <AuthContextProvider>
        <QueryClientProvider client={Client}>
          <UserTypeProvider>
            {" "}
            <UserProfileProvider>
              {" "}
              <ParallaxProvider>
                {" "}
                <Routes></Routes>
              </ParallaxProvider>
            </UserProfileProvider>
          </UserTypeProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </div>
  );
}

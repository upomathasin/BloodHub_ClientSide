import React, { Children } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Donors from "../Pages/Donors/Donors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "../Layouts/Main/Main";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UserPrivateRoute from "../Component/UserPrivateRoute/UserPrivateRoute";
import RequestBlood from "../Pages/RequestBlood/RequestBlood";

export default function Routes({ children }) {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/findDonors",
          element: <Donors></Donors>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/requestBlood",
          element: <RequestBlood></RequestBlood>,
        },

        {
          path: "/userProfile/:email",
          element: (
            <UserPrivateRoute>
              <UserProfile></UserProfile>,
            </UserPrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}>{children}</RouterProvider>;
}

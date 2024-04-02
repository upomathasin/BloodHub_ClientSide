import React, { Children } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Donors from "../Pages/Donors/Donors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "../Layouts/Main/Main";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UserPrivateRoute from "./UserPrivateRoute/UserPrivateRoute";
import RequestBlood from "../Pages/RequestBlood/RequestBlood";
import AdminDash from "../Pages/AdminDash/AdminDash";
import AdminRoute from "./AdminRoute/AdminRoute";
import UserDash from "../Pages/UserDash/UserDash";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import AdminDashLayout from "../Layouts/AdminDashLayout/AdminDashLayout";
import UserDashLayout from "../Layouts/UserDashLayout/UserDashLayout";
import UpdateProfile from "../Component/UpdateProfile/UpdateProfile";
import NoBlockUserPrivateRoute from "./NonBlockUserPrivateRoute.jsx/NoBlockUserPrivateRoute";
import MyRequests from "../Pages/MyRequests/MyRequests";

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
      ],
    },
    {
      path: "adminDash",
      element: (
        <AdminRoute>
          <AdminDashLayout></AdminDashLayout>
        </AdminRoute>
      ),
      children: [
        {
          path: "",
          element: <AdminDash></AdminDash>,
        },
        {
          path: "manageUsers",
          element: <ManageUsers></ManageUsers>,
        },
      ],
    },

    {
      path: "userDash",
      element: (
        <UserPrivateRoute>
          <UserDashLayout></UserDashLayout>
        </UserPrivateRoute>
      ),

      children: [
        {
          path: "",
          element: (
            <UserPrivateRoute>
              <UserDash></UserDash>
            </UserPrivateRoute>
          ),
        },
        {
          path: "requestBlood",
          element: (
            <NoBlockUserPrivateRoute>
              <RequestBlood></RequestBlood>
            </NoBlockUserPrivateRoute>
          ),
        },
        {
          path: "userProfile/:email",
          element: <UserProfile></UserProfile>,
        },
        {
          path: "updateProfile",
          element: <UpdateProfile></UpdateProfile>,
        },
        ,
        {
          path: "myRequests",
          element: <MyRequests></MyRequests>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}>{children}</RouterProvider>;
}

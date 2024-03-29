import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

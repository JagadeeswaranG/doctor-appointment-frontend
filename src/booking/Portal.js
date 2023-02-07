import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Admin Portal
function Portal() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;

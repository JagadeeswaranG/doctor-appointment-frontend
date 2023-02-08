import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/medical.png";

// Nav bar
function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(localStorage.getItem("un"));
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <img src={logo} className="img-logo" alt="logo"/>
      <h3 className="title-main ml-2">MediCare Hospitals</h3>
      <ul class="navbar-nav ml-auto">
        <h5 className="username align-right">{username}</h5>
        <div class="topbar-divider d-none d-sm-block"></div>
        <button onClick={handleLogout} type="button" class="btn btn-outline-warning mr-2">
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;

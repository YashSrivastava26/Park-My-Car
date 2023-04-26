import React from "react";
import "./landing.css";
// import Catalogue from "../Catalogue/Catalogue";
import Mapwrapper from "../Mapwrapper/Mapwrapper";
import { Outlet } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-dock">
        <Outlet />
      </div>
      <Mapwrapper />
      <div className="login-signup-btn-container">
        <button className="login-btn">Login</button>
        <button className="signin-btn">Signup</button>
      </div>
    </div>
  );
}

export default Landing;

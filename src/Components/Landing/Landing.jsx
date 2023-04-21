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
    </div>
  );
}

export default Landing;

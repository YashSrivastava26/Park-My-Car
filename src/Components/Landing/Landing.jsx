import React from "react";
import "./landing.css";
import Catalogue from "../Catalogue/Catalogue";
import Mapwrapper from "../Mapwrapper/Mapwrapper";

function Landing() {
  return (
    <div className="landing">
      <Catalogue />
      <Mapwrapper />
    </div>
  );
}

export default Landing;

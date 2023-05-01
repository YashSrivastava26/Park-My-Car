import React from "react";
import "./loader.css";
import preloader from "../../Common Resources/preloader2.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={preloader} alt="" srcset="" />
    </div>
  );
}

export default Loader;

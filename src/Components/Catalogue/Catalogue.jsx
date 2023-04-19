import React from "react";
import "./catalogue.css";
import { NotificationsActiveRounded } from "@mui/icons-material";

function Catalogue() {
  return (
    <div className="catalogue">
      <div className="catalogue-container">
        <div className="cat-top">
          <div className="cat-top-tp">
            <h3>Dashboard</h3>
            <div className="cat-top-tp-right">
              <NotificationsActiveRounded />
              <div className="cat-top-tp-pro"></div>
            </div>
          </div>
        </div>
        <div className="cat-btm"></div>
      </div>
    </div>
  );
}

export default Catalogue;

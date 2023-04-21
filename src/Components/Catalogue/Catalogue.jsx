import React from "react";
import "./catalogue.css";
import { NotificationsActiveRounded } from "@mui/icons-material";
import Card from "../Card/Card";

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
          <div className="cat-top-btm">
            <span>
              Search Results <span>Bhubaneswar,India</span>
            </span>
            <span className="results-no">20 Parkings found</span>
          </div>
        </div>
        <div className="cat-btm">
          <div className="cat-btm-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;

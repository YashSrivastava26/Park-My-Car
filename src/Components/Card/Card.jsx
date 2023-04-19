import React from "react";
import "./card.css";
import img from "../../Common Resources/img1.jpeg";
import distance from "./icons/distance.png";
import favorite from "./icons/favorite.png";
import like from "./icons/love.png";
import parking from "./icons/parking.png";

function Card() {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-left">
          <img src={img} alt="" />
        </div>
        <div className="card-right">
          <span className="card-loc">Patia,Bhubaneswar</span>
          <span className="card-name">Parking plaza</span>
          <span className="card-rate">
            $10<span>/hour</span>
          </span>
          <div className="card-aminities">
            <div className="card-aminity">
              <img src={distance} alt="" />
              <span>10km</span>
            </div>
            <div className="card-aminity">
              {/* <img className="no-invert" src={favorite} alt="" /> */}
              <img src={like} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

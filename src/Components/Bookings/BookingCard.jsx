import React from "react";
import "./bookings.css";

function BookingCard() {
  return (
    <div className="Bcard">
      <div className="bcard-container">
        <span className="bcc-name">KIIT Parking</span>
        <p>Location : Patia,Bhubaneswar</p>
        <p>Date : May 1 , 2023</p>
        <p>Time : 1:00 - 2:00</p>
        <p>Vehicle : WB02AZ1234</p>
        <p>Total : Rs 500</p>
      </div>
    </div>
  );
}

export default BookingCard;

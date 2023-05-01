import React from "react";
import "./bookings.css";
import BookingCard from "./BookingCard";

function Bookings() {
  return (
    <div className="bookings">
      <div className="bookings-container">
        <span className="b-head">Bookings</span>
        <div className="bookings-main-container">
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
        </div>
      </div>
    </div>
  );
}

export default Bookings;

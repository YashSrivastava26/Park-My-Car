import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "./parking.css";
import image from "../../Common Resources/img1.jpeg";
import { FavoriteBorder } from "@mui/icons-material";
import BookingForm from "../Booking Form/BookingForm";
function Parking() {
  const [open, setOpen] = useState(false)
  const handleOnClick = () => {
    setOpen(true);
  }
  return (
    <>
    <div className="parking">
      <div className="parking-container">
        <div className="park-left">
          <div className="pl-top">
            <div className="pltt">
              <span className="pl-name">Parking Plaza</span>
              <span className="pl-rate">
                $5<span>/hour</span>
              </span>
            </div>
            <div className="pltb">Area,City,Country</div>
          </div>
          <div className="pl-mid">
            <div className="plml">
              <img src={image} alt="" />
            </div>
            <div className="plmr">
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>
          </div>
          <div className="pl-btm">
            <div className="plbt">
              <span>Description</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus eum quia quasi iusto possimus in fugiat ipsam
                esse rem iste maiores quidem, optio quibusdam odit harum non
                ipsum quae modi.
              </p>
            </div>
            <div className="plbb">
              <button onClick={handleOnClick}>Book a slot</button>
              <button>
                <FavoriteBorder /> Add to favorite
              </button>
            </div>
          </div>
        </div>
        <div className="park-right">
          <div className="plr-map">
            <MapContainer
              center={[0, 0]}
              zoom={2}
              zoomControl={false}
              minZoom={2}
              dragging={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
              />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
    {open && <BookingForm open={open} setOpen={setOpen} parkingPlazaReadOnlyDetails={{parking_plaza_id: 123, amount:20000000000, transaction_id:1235468}} />}
    </>
  );
}

export default Parking;

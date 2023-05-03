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
import { useParams } from "react-router-dom";
import { Api } from "../../Api/Axios";
import { useDataLayerValue } from "../../Datalayer/DataLayer";
import axios from "axios";
function Parking() {
  const params = useParams();
  const { showError } = useDataLayerValue();
  const [open, setOpen] = useState(false);
  const [parkingInfo, setParkingInfo] = useState({});
  const [locationName, setLocationName] = useState("");
  const mapRef = useRef();
  const handleOnClick = () => {
    setOpen(true);
  };

  const getLocationDetails = async (lat, lon) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
    await axios
      .get(url)
      .then((res) => {
        setLocationName(res.data?.display_name);
      })
      .catch((err) => {
        showError("Something went wrong while fetching location");
      });
  };

  const getParking = async (parkingId) => {
    await Api.get("/parking-plaza/get-parking-by-id", {
      params: { id: parkingId },
    })
      .then((res) => {
        setParkingInfo(res.data.parking);
        getLocationDetails(
          res.data.parking.latitude,
          res.data.parking.longitude
        );
        mapRef.current?.flyTo(
          [res.data.parking.latitude, res.data.parking.longitude],
          18,
          {
            duration: 3,
          }
        );
      })
      .catch((err) => {
        showError("Something went wrong while fetching data");
      });
  };

  useEffect(() => {
    const parkingId = params?.id;
    console.log(parkingId);
    if (parkingId) {
      getParking(parkingId);
    }
  }, [params?.parkingId]);

  return (
    <>
      <div className="parking">
        <div className="parking-container">
          <div className="park-left">
            <div className="pl-top">
              <div className="pltt">
                <span className="pl-name">{parkingInfo?.name}</span>
                <span className="pl-rate">
                  Rs{parkingInfo?.parking_rate}
                  <span>/hour</span>
                </span>
              </div>
              <div className="pltb">{locationName}</div>
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
                  {parkingInfo?.description
                    ? parkingInfo?.description
                    : "No description"}
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
                ref={mapRef}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
                />
                {parkingInfo?.latitude && (
                  <Marker
                    position={[parkingInfo?.latitude, parkingInfo?.longitude]}
                  >
                    <Popup>Parking location</Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <BookingForm
          open={open}
          setOpen={setOpen}
          parkingPlazaReadOnlyDetails={{
            parking_plaza_id: 123,
            amount: 20000000000,
            transaction_id: 1235468,
          }}
        />
      )}
    </>
  );
}

export default Parking;

import React, { useEffect, useState } from "react";
import "./card.css";
import img from "../../Common Resources/img1.jpeg";
import distance from "./icons/distance.png";
import favorite from "./icons/favorite.png";
import like from "./icons/love.png";
import parking from "./icons/parking.png";
import { FavoriteBorderRounded, LocationOnRounded } from "@mui/icons-material";
import axios from "axios";
import { useDataLayerValue } from "../../Datalayer/DataLayer";

function Card({ info }) {
  const [distance, setDistance] = useState(0);
  const [locationName, setLocationName] = useState("");
  const { showError } = useDataLayerValue();
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  const getDistanceFromLatLonInM = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return Math.round(d * 1000);
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

  const trucuateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    getLocationDetails(info?.latitude, info?.longitude);

    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setDistance(
        getDistanceFromLatLonInM(lat, lng, info?.latitude, info?.longitude)
      );
    });
  }, [info]);

  return (
    <div className="card">
      <div className="card-container">
        <div className="card-left">
          <img src={img} alt="" />
        </div>
        <div className="card-right">
          <span className="card-loc">{trucuateString(locationName, 30)}</span>
          <span className="card-name">Parking plaza</span>
          <span className="card-rate">
            $10<span>/hour</span>
          </span>
          <div className="card-aminities">
            <div className="card-aminity">
              <LocationOnRounded sx={{ fontSize: "1.3rem" }} />
              <span>
                {distance < 1000 ? `${distance}M` : `${distance / 1000}KM`}
              </span>
            </div>
            <div className="card-aminity">
              {/* <img className="no-invert" src={favorite} alt="" /> */}
              <FavoriteBorderRounded sx={{ fontSize: "1.3rem" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

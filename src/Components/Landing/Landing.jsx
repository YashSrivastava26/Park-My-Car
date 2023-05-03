import React, { useEffect, useState } from "react";
import "./landing.css";
// import Catalogue from "../Catalogue/Catalogue";
import Mapwrapper from "../Mapwrapper/Mapwrapper";
import { Outlet } from "react-router-dom";
import { useDataLayerValue } from "../../Datalayer/DataLayer";
import { Api } from "../../Api/Axios";

function Landing() {
  const { state, showError } = useDataLayerValue();
  const [parkings, setParkings] = useState({});

  const getParkings = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      console.log(pos);
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      await Api.get("/parking-plaza/get-parkings", {
        params: { lat: lat, lng: lng },
      })
        .then((res) => {
          setParkings(res.data);
        })
        .catch((err) => {
          showError(err?.response?.data?.error?.message);
        });
    });
  };

  useEffect(() => {
    getParkings();
  }, []);

  return (
    <div className="landing">
      <div className="landing-dock">
        <Outlet />
      </div>
      <Mapwrapper parkings={parkings?.allParkings} />
    </div>
  );
}

export default Landing;

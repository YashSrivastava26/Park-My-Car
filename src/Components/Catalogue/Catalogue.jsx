import React, { useEffect, useState } from "react";
import "./catalogue.css";
import { NotificationsActiveRounded } from "@mui/icons-material";
import Card from "../Card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../../Datalayer/DataLayer";
import { Api } from "../../Api/Axios";

function Catalogue() {
  const { state, showError } = useDataLayerValue();
  const navigate = useNavigate();
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
    <div className="catalogue">
      <div className="catalogue-container">
        <div className="cat-top">
          <div className="cat-top-tp">
            <h3>Dashboard</h3>
            <div className="cat-top-tp-right">
              {state?.loggedIn ? (
                <>
                  <NotificationsActiveRounded />
                  <div className="cat-top-tp-pro"></div>
                </>
              ) : (
                <div className="login-btn-container">
                  <Link to="/signup">
                    <div className="signup-btn">Signup</div>
                  </Link>
                  <Link to="/login">
                    <div className="login-btn">Login</div>
                  </Link>
                </div>
              )}
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
            {parkings?.nearestParkings?.map((parking, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/parking/${parking?._id}`);
                }}
              >
                <Card info={parking} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;

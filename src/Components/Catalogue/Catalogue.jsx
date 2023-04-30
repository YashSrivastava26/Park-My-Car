import React, { useState } from "react";
import "./catalogue.css";
import { NotificationsActiveRounded } from "@mui/icons-material";
import Card from "../Card/Card";
import { Link, useNavigate } from "react-router-dom";

function Catalogue() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="catalogue">
      <div className="catalogue-container">
        <div className="cat-top">
          <div className="cat-top-tp">
            <h3>Dashboard</h3>
            <div className="cat-top-tp-right">
              {loggedIn ? (
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
            <div
              onClick={() => {
                navigate("/parking");
              }}
            >
              <Card />
            </div>
            <div
              onClick={() => {
                navigate("/parking");
              }}
            >
              <Card />
            </div>
            <div
              onClick={() => {
                navigate("/parking");
              }}
            >
              <Card />
            </div>
            <div
              onClick={() => {
                navigate("/parking");
              }}
            >
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;

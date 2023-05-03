import React, { useState } from "react";
import "./UserProfile.css";
import Avatar from "@mui/material/Avatar";
import userImg from "../../Common Resources/user (2).png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const UserProfile = () => {
  const [detail, setDetail] = useState({
    name: "yash",
    dob: "32/ 19/ 0000",
    email: "yash@gmail.com",
    parkingBooked: 12,
  });
  return (
    <div className="userProfile">
      <div className="userContainer">
        <div className="avatarContainer">
          <Avatar alt={userImg} src="" sx={{ width: 56, height: 56 }} />
        </div>
        <div className="detailsContainer">
          <div className="paddingDetail">
            <div className="innerDetailContainer">
              <p className="detailHeading">Name</p>
              <p className="detail">{detail.name}</p>
            </div>
            <div className="innerDetailContainer">
              <p className="detailHeading">Date Of Birth</p>
              <p className="detail"> {detail.dob}</p>
            </div>
            <div className="innerDetailContainer">
              <p className="detailHeading">email</p>
              <p className="detail">{detail.email}</p>
            </div>
          </div>
        </div>
        <div className="historyContainer">
          <div className="paddingDetail">
            <div className="innerDetailContainer">
              <p className="detailHeading">ParkingBooked</p>
              <p className="detail">{detail.parkingBooked}</p>
            </div>
          </div>
          <div className="showHistory">
            Show Parking History
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React, { useEffect } from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../Common Resources/logo2.png";
import { useDataLayerValue } from "../../Datalayer/DataLayer";
import { useLocation, useNavigate } from "react-router-dom";
function Sidebar() {
  const { state, logoutFunc } = useDataLayerValue();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <h1 className="logo">P</h1>
        <div className="sidebar-links">
          <div
            className={`sidebar-link ${
              (location?.pathname === "/" ||
                location?.pathname.includes("parking")) &&
              "sidebar-link-active"
            }`}
            onClick={() => navigate("/")}
          >
            <DashboardIcon />
          </div>
          <div className={`sidebar-link`}>
            <FavoriteIcon />
          </div>
          <div
            className={`sidebar-link ${
              location?.pathname.includes("bookings") && "sidebar-link-active"
            }`}
            onClick={() => navigate("/bookings")}
          >
            <ArticleIcon />
          </div>
          <div
            className={`sidebar-link ${
              location?.pathname?.includes("profile") && "sidebar-link-active"
            }`}
            onClick={() => navigate("/profile")}
          >
            <PersonIcon />
          </div>
        </div>

        <div className="sidebar-open sidebar-link" onClick={() => logoutFunc()}>
          <ExitToAppIcon sx={{ color: "red" }} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

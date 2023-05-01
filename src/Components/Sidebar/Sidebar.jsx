import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../Common Resources/logo2.png";
import { useDataLayerValue } from "../../Datalayer/DataLayer";
function Sidebar() {
  const { state, logoutFunc } = useDataLayerValue();
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <h1 className="logo">P</h1>
        <div className="sidebar-links">
          <div className="sidebar-link">
            <DashboardIcon />
          </div>
          <div className="sidebar-link">
            <PersonIcon />
          </div>
          <div className="sidebar-link">
            <ArticleIcon />
          </div>
          <div className="sidebar-link">
            <FavoriteIcon />
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

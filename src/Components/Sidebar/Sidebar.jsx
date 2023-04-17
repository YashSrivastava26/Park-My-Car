import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">P</h1>
      <div className="sidebar-links">
        <div className="sidebar-link">Dashboard</div>
        <div className="sidebar-link">Allotment</div>
        <div className="sidebar-link">User</div>
        <div className="sidebar-link">History</div>
      </div>
    </div>
  );
}

export default Sidebar;

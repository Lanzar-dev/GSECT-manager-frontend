import React from "react";
import "../styles/components/sidebar.scss";
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className="side-bar">
      <div className="gsect-sidebar">
        <h2>GSECT</h2>
      </div>

      <div className="sidebar-list">
        <li className="dashboard">
          <Link to="/dashboard">Dashboard </Link>
        </li>
        <li className="activesubscription">
          <Link href="/subscritptions">
            Active Subscriptions{" "}
          </Link>
        </li>
        <li className="history-analytics">
          <Link to="/history">
            History & Analytics{" "}
          </Link>
        </li>
        <li className="settings">
          <Link to="/settings">Settings </Link>
        </li>
        <li className="logout">
          <Link onClick={()=> props.history.push("/")}>Log out </Link>
        </li>
      </div>
    </div>
  );
};

export default SideBar;

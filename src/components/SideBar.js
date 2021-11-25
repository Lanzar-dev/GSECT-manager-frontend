import React from "react";
import "../styles/components/sidebar.scss";
import { Link, useHistory } from "react-router-dom";

const SideBar = () => {
  const history = useHistory();
  return (
    <div className="side-bar">
      <div className="gsect">
        <img
          src={require("../assets/images/logo.png").default}
          alt="gsect-logo"
        />
      </div>

      <div className="list">
        <Link to="/dashboard" className="dashboard">
          <span>
            <img
              src={require("../assets/images/dashboard.png").default}
              alt=" "
            />
          </span>
          <label>Dashboard </label>
        </Link>
        <Link to="/subscritptions" className="subscription">
          <span>
            <img src={require("../assets/images/track.png").default} alt=" " />
          </span>
          <label>Active Subscriptions </label>
        </Link>
        <Link to="/history" className="history-analytics">
          <span>
            <img
              src={require("../assets/images/history.png").default}
              alt=" "
            />
          </span>
          <label>History & Analytics </label>
        </Link>
        <Link to="/settings" className="settings">
          <span>
            <img
              src={require("../assets/images/sliders.png").default}
              alt=" "
            />
          </span>
          <label>Settings </label>
        </Link>
      </div>
      <div
        className="logout"
        onClick={(e) => {
          e.preventDefault();
          history.push("/");
        }}
      >
        <div>
          <span>
            <img src={require("../assets/images/exit.png").default} alt=" " />
          </span>
          <label>Log out </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

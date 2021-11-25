import React from "react";
import SearchBar from "../../components/SearchBar";
import SideBar from "../../components/SideBar";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <section className="sidebar">
        <SideBar />
      </section>

      <section className="main-page">
        <SearchBar />
        <div></div>
      </section>
    </div>
  );
};

export default DashBoard;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles//about.scss";

import Button from "../components/Button";

const About = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="about-us">
      <header className="header">
        <div className="menu">
          <img
            src={require("../assets/images/logo.png").default}
            alt="logo-white"
          />
          <div className="links">
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/about" className="link">
              About Us
            </NavLink>
            <NavLink to="/support" className="link">
              Support
            </NavLink>
            <Link
              onClick={(e) => {
                setOpenModal(true);
                e.preventDefault();
              }}
              className="link"
            >
              Log in
            </Link>
          </div>
        </div>
        <div className="get-started">
          <Button
            label="Get started"
            type="primary"
            action={() => console.log("test 123")}
          />
        </div>
      </header>
      <section className="banner">
        <div className="content">
          <img
            className="right-top-left"
            src={require("../assets/images/small-ring.png").default}
            alt="gsect dashboard"
          />
          <img
            src={require("../assets/images/vision.png").default}
            alt="vision-pyramid"
            className="vision"
          />
          <h1 className="title">Our Vision</h1>
          <p className="subtitle">
            In Lorem amet dolor labore elit. Consectetur ad consequat ex sit
            sunt dolore. Labore ipsum voluptate culpa veniam fugiat est In Lorem
            amet dolor labore elit. Consectetur ad consequat ex sit sunt dolore.
            Labore ipsum voluptate culpa veniam fugiat est In Lorem amet dolor
            labore elit. Consectetur ad consequat ex sit sunt dolore. Labore
            ipsum voluptate culpa veniam fugiat est In Lorem amet dolor labore
            elit. Consectetur ad consequat ex sit sunt dolore. Labore ipsum
            voluptate culpa veniam fugiat est
          </p>
        </div>

        <div className="banner-image">
          <img
            className="right-bottom-right"
            src={require("../assets/images/big-ring.png").default}
            alt="gsect dashboard"
          />
          <img
            className="banner-img"
            src={require("../assets/images/banner-img.png").default}
            alt="gsect dashboard"
          />
        </div>
      </section>
      <section className="note">
        <div className="note-image">
          <img
            src={require("../assets/images/note-img.png").default}
            alt=""
            className="note-img"
          />
          <img
            src={require("../assets/images/big-ring.png").default}
            alt=""
            className="bottom-right"
          />
        </div>
        <div className="note-content">
          <h1>A note from our CEO</h1>
          <h2>We exist to satisfy our users.</h2>
          <p>
            In Lorem amet dolor labore elit. Consectetur ad consequat ex sit
            sunt dolore. Labore ipsum voluptate culpa veniam fugiat est In Lorem
            amet dolor labore elit. Consectetur ad consequat ex sit sunt dolore.
            Labore ipsum voluptate culpa veniam fugiat est In Lorem amet dolor
            labore elit. Consectetur ad consequat ex sit sunt dolore. Labore
            ipsum voluptate culpa veniam fugiat est In Lorem amet dolor labore
            elit. Consectetur ad consequat ex sit sunt dolore. Labore ipsum
            voluptate culpa veniam fugiat est
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

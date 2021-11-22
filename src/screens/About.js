import React from "react";

import Header from "./../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

import "../styles//about.scss";

const About = (props) => {
  return (
    <div className="about-us">
      <Header />
      <section className="banner">
        <div className="note">
          <h1>About Us</h1>
          <p>We cannot find the page you're looking for.</p>
          <p>Please check back later.</p>
          <Button
            type="inverted"
            label="Go Home"
            action={() => props.history.push("/")}
          />
        </div>
        <div className="illustration">
          <div className="img-holder">
            <img
              src={require("../assets/images/error.png").default}
              alt="coming soon"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

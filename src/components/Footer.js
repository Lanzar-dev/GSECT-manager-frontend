import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer">
      <section className="main">
        <div className="join">
          <h2>Join our community</h2>
          <p>Get weekly updates and first access to our new products.</p>
          <form>
            <input type="text" placeholder="Email Address" />
            <Button type="subscribe" label="Subscribe" />
          </form>
        </div>
        <div className="company">
          <h3>COMPANY</h3>
          <div>
            <p>About</p>
            <p>Careers</p>
            <p>Terms of service</p>
            <p>Help</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="legal">
          <h3>LEGAL</h3>
          <div>
            <p>Learn how we use your information</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="earn">
          <h3>EARN WITH GSECT</h3>
          <div>
            <p>Earn by Referral</p>
            <p>FAQs</p>
          </div>
        </div>
      </section>
      <section className="minor">
        <div>
          <h3>GSECTmanager</h3>
          <p>All your subscriptions in one click</p>
          <p>&copy;2021 GSECTmanager. All rights reserved</p>
        </div>
        <div className="links" >
          <Link>
            <img
              src={require("../assets/images/instagram.png").default}
              alt="instagram"
            />
          </Link>
          <Link>
            <img
              src={require("../assets/images/facebook.png").default}
              alt="instagram"
            />
          </Link>
          <Link>
            <img
              src={require("../assets/images/twitter.png").default}
              alt="instagram"
            />
          </Link>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Footer;

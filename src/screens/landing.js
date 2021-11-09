import React, { useState } from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import { Link, NavLink } from "react-router-dom";
//styles
import "../styles/components/transition.scss";
import "../styles/landing.scss";
import "../styles/components/modal.scss";
// components
import Button from "../components/Button";

export default function Landing() {
  const [openModal, setOpenModal] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="landing">
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
          <h1 className="title">Manage your subscriptions in one place</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis.
          </p>
          <div className="actions">
            <Button
              label="Get started"
              type="inverted"
              action={() => console.log("test 123")}
            />
            <Button
              label="Log In"
              type="secondary"
              action={() => setOpenModal(true)}
            />
          </div>
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
      {/* section-two */}
      <section className="sub">
        <div className="sub-image">
          <img
            className="left-top-left"
            src={require("../assets/images/medium-ring.png").default}
            alt="gsect dashboard"
          />
          <img
            className="sub-img"
            src={require("../assets/images/gsect-boy.png").default}
            alt="gsect dashboard"
          />
          <img
            className="bottom-right"
            src={require("../assets/images/small-ring.png").default}
            alt="gsect dashboard"
          />
        </div>

        <div className="sub-content">
          <h1 className="title">Manage your subscriptions in one place</h1>

          <div className="subtitle">
            <div className="choices">
              <div className="choices-img">
                <img
                  src={require("../assets/images/tool-box.png").default}
                  alt=""
                />
              </div>
              <div className="choices-content">
                <h3>Create ubscriptions</h3>
                <p>
                  Enable access to your email address to automatically add
                  subscriptions or add it manually.
                </p>
              </div>
            </div>
            <div className="choices">
              <div className="choices-img">
                <img
                  src={require("../assets/images/track.png").default}
                  alt=""
                />
              </div>
              <div className="choices-content">
                <h3>Track subscriptions</h3>
                <p>
                  View all the details of your current, paused and ended
                  subscriptions. Stay updated.
                </p>
              </div>
            </div>
            <div className="choices">
              <div className="choices-img">
                <img
                  src={require("../assets/images/tool-box.png").default}
                  alt=""
                />
              </div>
              <div className="choices-content">
                <h3>Everything in one place</h3>
                <p>
                  Pause and end your subscriptions easily in a few clicks.
                  Review your hostory & expenses analysis.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Button
              label="Get started"
              type="inverted"
              action={() => console.log("test 123")}
            />
          </div>
        </div>
      </section>
      {/* section-three */}
      <section className="manage">
        <div className="manage-text">
          <h1>Manage your subscriptions in one place.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            integer rhoncus duis adipiscing facilisis id. Sed molestie auctor
            nam hac. Amet, sed ac tempor massa. Odio senectus dictume sapien,
            proin enim.
          </p>
          <Button type="inverted" label="Get Started" />
        </div>
        <div className="manage-image">
          <img
            className="top-left"
            src={require("../assets/images/medium-ring.png").default}
            alt="gsect dashboard"
          />
          <img
            className="manage-img"
            src={require("../assets/images/Intersect.png").default}
            alt="gsect dashboard"
          />
          <img
            className="right-bottom"
            src={require("../assets/images/small-ring.png").default}
            alt="gsect dashboard"
          />
        </div>
      </section>
      <section></section>
      <CSSTransition isOpen={openModal} timeout={300}>
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          closeTimeoutMS={400}
          className="login-popup"
          style={{
            overlay: {
              zIndex: 5,
              background: "#0000004f",
              top: "0px",
            },
          }}
        >
          <div className="modalHead">
            <div className="modalTitle">
              <h3>Log In</h3>
              <p>Access your free profile.</p>
            </div>
            <div className="close">
              <img
                onClick={() => setOpenModal(false)}
                src={require("../assets/images/close.png").default}
                alt="exit-popup"
              />
            </div>
          </div>
          <div className="formDiv">
            <div className="formBtn">
              <Button type="secondary" label="Continue with Google" />
              <Button type="facebook" label="Continue with Facebook" />
            </div>

            <div className="space">
              <hr />
              <div className="or">or</div>
            </div>

            <div className="loginDetails">
              <input className="email" type="email" placeholder="Email" />

              <input
                className="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                src={require("../assets/images/eye.png").default}
                alt=""
              />
              <div className="holder">
                <img
                  onClick={togglePassword}
                  src={require("../assets/images/eye.png").default}
                  alt=""
                />
              </div>
              <Button type="inverted" label="Log In" />
              <p>
                <a href="/">Forgot password?</a>
              </p>
            </div>
          </div>
          <div className="create">
            <p>
              Don't have an coount? <a href="/">Sign up</a>
            </p>
          </div>
        </Modal>
      </CSSTransition>
    </div>
  );
}

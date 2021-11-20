import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles//about.scss";
import Footer from "../components/Footer";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import Button from "../components/Button";
import Header from "./../components/Header";

const About = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [emailSignup, setEmailSignup] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="about-us">
      {/* login, signup and forgot password */}
      <CSSTransition isOpen={openModal} timeout={300}>
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          closeTimeoutMS={500}
          className="login-popup"
        >
          <div className="modalHead">
            <div className="modalTitle">
              <h3>Log In</h3>
              <p>Access your free profile.</p>
            </div>
            <div className="closeBtn">
              <img
                onClick={() => setOpenModal(false)}
                src={require("../assets/images/close.png").default}
                alt="exit-popup"
              />
            </div>
          </div>
          <div className="formDiv">
            <div className="formBtn">
              <Button type="google" label="Continue with Google" />
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
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setResetPassword(true);
                    setOpenModal(false);
                  }}
                  href="/"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
          </div>
          <div className="create">
            <p>
              Don't have an account?{" "}
              <Link
                onClick={(e) => {
                  setOpenSignup(true);
                  e.preventDefault();
                  setOpenModal(false);
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </Modal>
      </CSSTransition>
      {/* signup page */}
      <Modal
        isOpen={openSignup}
        onRequestClose={() => setOpenSignup(false)}
        closeTimeoutMS={500}
        className="login-popup signup"
      >
        <div className="modalHead">
          <div className="modalTitle">
            <h3>Sign up</h3>
            <p>Access your free profile.</p>
          </div>
          <div className="closeBtn">
            <img
              onClick={() => setOpenSignup(false)}
              src={require("../assets/images/close.png").default}
              alt="exit-popup"
            />
          </div>
        </div>
        <div className="formDiv">
          <div className="formBtn">
            <Button type="google" label="Sign up with Google" />
            <Button type="facebook" label="Sign up with Facebook" />
          </div>

          <div className="space">
            <hr />
            <div className="or">or</div>
          </div>

          <div className="loginDetails">
            <Button
              action={() => {
                setEmailSignup(true);
                setOpenSignup(false);
              }}
              type="inverted"
              label="Sign up with email"
            />
          </div>
        </div>
        <div className="create">
          <p>
            Already have an account?{" "}
            <Link
              onClick={(e) => {
                setOpenModal(true);
                setOpenSignup(false);
                e.preventDefault();
              }}
            >
              Log in
            </Link>
          </p>
        </div>
      </Modal>
      {/* register with email */}
      <Modal
        isOpen={emailSignup}
        onRequestClose={() => {
          setEmailSignup(false);
        }}
        closeTimeoutMS={500}
        className="email-modal"
      >
        <div className="modalHead">
          <div className="modalTitle">
            <h3>Sign up</h3>
            <p>Access your free profile.</p>
          </div>
          <div className="closeBtn">
            <img
              onClick={() => setEmailSignup(false)}
              src={require("../assets/images/close.png").default}
              alt="exit-popup"
            />
          </div>
        </div>
        <div className="formDiv">
          <div className="formBtn">
            <Button type="google" label="Continue with Google" />
            <Button type="facebook" label="Continue with Facebook" />
          </div>

          <div className="space">
            <hr />
            <div className="or">or</div>
          </div>

          <div className="user-Details">
            <div className="info">
              <p>Email</p>
              <input className="email" type="email" placeholder="Email" />
            </div>

            <div className="info">
              <p>Name</p>
              <input className="name" type="text" placeholder="Full Name" />
            </div>

            <div className="info">
              <p>Password</p>
              <input
                className="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
              />
              <div className="holder">
                <img
                  onClick={togglePassword}
                  src={require("../assets/images/eye.png").default}
                  alt=""
                />
              </div>
            </div>

            <Button type="inverted" label="Sign up" />
          </div>
        </div>
        <div className="create">
          <p>
            Aleady have an account?{" "}
            <Link
              onClick={(e) => {
                e.preventDefault();
                setEmailSignup(false);
                setOpenModal(true);
              }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </Modal>
      {/* reset password */}
      <Modal isOpen={resetPassword} className="reset">
        <div className="resetDiv">
          <div className="modalTitle">
            <h3>Reset Password</h3>
          </div>
          <div className="closeBtn">
            <img
              onClick={() => setResetPassword(false)}
              src={require("../assets/images/close.png").default}
              alt="exit-popup"
            />
          </div>
        </div>
        <div>
          <form className="resetForm">
            <p>Enter you email address to reset password.</p>
            <input type="email" placeholder="Email Address" />
            <Button
              type="inverted"
              label="Reset password"
              action={() => {
                setResetPassword(false);
                setResetMessage(true);
              }}
            />
          </form>
        </div>
        <div className="create">
          <p>
            Dont have an account?{" "}
            <Link
              onClick={(e) => {
                e.preventDefault();
                setResetPassword(false);
                setOpenSignup(true);
              }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </Modal>
      {/* reset confirmation */}
      <Modal isOpen={resetMessage} className="reset">
        <div className="resetDiv">
          <div className="modalTitle">
            <h3>Reset Password</h3>
          </div>
          <div className="closeBtn">
            <img
              onClick={() => setResetMessage(false)}
              src={require("../assets/images/close.png").default}
              alt="exit-popup"
            />
          </div>
        </div>
        <div>
          <div className="resetText">
            <p>
              We have sent a mail to user@gmail.com with a link to reset your
              password.
            </p>
            <p>
              If you have not received a mail after a few minutes, please check
              your spam folder.
            </p>
          </div>
        </div>
        <div className="resend">
          <span>
            Didn't get any email?{" "}
            <Link onClick={(e) => e.preventDefault()}>Resend email</Link>
          </span>
        </div>

        <div className="create">
          <p>
            Dont have an account?{" "}
            <Link
              onClick={(e) => {
                e.preventDefault();
                setResetMessage(false);
                setOpenSignup(true);
              }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </Modal>

      {/* main content */}
      <Header />
      <section className="banner">
        <div className="note">
          <h1>About Us</h1>
          <p>We cannot find the page you're looking for.</p>
          <span>Please check back later.</span>
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
      {/* <section className="note">
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
      </section> */}
      <Footer />
    </div>
  );
};

export default About;

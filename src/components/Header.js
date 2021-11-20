import React, { useState } from "react";
import "../styles/components/header.scss";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [emailSignup, setEmailSignup] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
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
          action={() => {
            console.log("test 123");
            setOpenSignup(true);
          }}
        />
      </div>
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
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setResetPassword(true);
                  }}
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
            <Button type="inverted" label="Sign up with email" />
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
                  // href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setResetPassword(true);
                    setOpenModal(false);
                  }}
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
    </header>
  );
};

export default Header;

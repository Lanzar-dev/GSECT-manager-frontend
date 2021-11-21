import React, { useState } from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
//styles
import "../styles/components/transition.scss";
import "../styles/landing.scss";
import "../styles/components/modal.scss";
// components
import Button from "../components/Button";
// import Footer from "../components/Footer";
import Header from "./../components/Header";

export default function Landing() {
  const [openModal, setOpenModal] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [emailSignup, setEmailSignup] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const choices = [
    {
      id: 0,
      title: "Create subcriptions",
      subtitle:
        "Enable access to your email address to automatically add subscriptions or add it manually.",
      icon: require("../assets/images/tool-box.png").default,
    },
    {
      id: 1,
      title: "Track subcriptions ",
      subtitle:
        "View all the details of your current, paused and ended subcriptions. Stay updated.",
      icon: require("../assets/images/track.png").default,
    },
    {
      id: 2,
      title: "Everthing in one place",
      subtitle:
        "Pause and end your subcriptions easily in a few clicks. Review your history & expenses analysis.",
      icon: require("../assets/images/tool-box.png").default,
    },
  ];

  return (
    <>
      <div className="landing">
        <Header />
        <section className="banner">
          <div className="content">
            <img
              className="right-top-left"
              src={require("../assets/images/small-ring.png").default}
              alt="gsect dashboard"
            />
            <h1 className="title">Manage your subscriptions in one place</h1>
            <p className="subtitle">
              Tell us what you want to subscribe for, we’ll take care of the
              rest.
            </p>
            <div className="actions">
              <Button
                label="Get started"
                type="inverted"
                action={() => {
                  console.log("test 123");
                  setOpenSignup(true);
                }}
              />
              <Button
                label="Log In"
                type="secondary"
                action={() => setOpenModal(true)}
                className="show-lg-only"
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
              {choices &&
                choices.map((choice) => (
                  <div className="choices" key={choice.id}>
                    <div className="choices-cover">
                      <div className="choices-img">
                        <img src={choice.icon} alt="" />
                      </div>
                    </div>
                    <div className="choices-content">
                      <h3>{choice.title}</h3>
                      <p>{choice.subtitle}</p>
                    </div>
                  </div>
                ))}
              <div className="actions">
                <Button
                  label="Get started"
                  type="inverted"
                  action={() => {
                    console.log("test 123");
                    setOpenSignup(true);
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* section-three */}
        <section className="manage">
            <div className="manage-text">
              <h1>Manage your subscriptions in one place.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer rhoncus duis adipiscing facilisis id. Sed molestie auctor nam hac. Amet, sed ac tempor massa. Odio senectus dictume sapien, proin enim.
              </p>
              <Button
                type="inverted"
                label="Get Started"
                action={() => {
                  console.log("test 123");
                  setOpenSignup(true);
                }}
              />
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
        <section className="reviews">
          <div>
            <h1>Hear what our customers are saying about us.</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer rhoncus duis adipiscing facilisis id. Sed molestie auctor nam hac. Amet, sed ac tempor massa. Odio senectus dictume sapien, proin enim.
            </p>
          </div>
          <div></div>
        </section>
      </div>
      {/* <Footer/> */}
      {/* login signup and forgot password */}
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
    </>
  );
}

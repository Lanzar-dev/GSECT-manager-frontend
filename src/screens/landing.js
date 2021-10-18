import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/landing.scss";
import "../styles/components/modal.scss";
// components
import Button from "../components/Button";
import TextField from '../components/TextField';

const LoginModal = ({ openModal, setOpenModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTextchange = (e) => console.log('whatever', e);
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      className="login-popup"
    >
      <div className="header">
        <div className="modalTitle">
          <h3>Log In</h3>
          <p>Access your free profile.</p>
        </div>
        <button className="close" onClick={() => setOpenModal(false)}>
          <img src={require('../assets/images/close.png').default} />
        </button>
      </div>
      <div className="form">
        <div className="extra">
          <Button
            type="gray"
            width="100%"
            icon={require('../assets/images/google.png').default}
            label="Continue with Google"
            stroke="#EAEAED"
          />
          <Button
            type="blue"
            width="100%"
            icon={require('../assets/images/facebook.png').default}
            label="Continue with Facebook"
          />
        </div>

        <form className="loginDetails">
          <TextField
            type="email"
            placeholder="Email Address"
            change={setEmail}
            value={email}
          />
          <TextField
            type="password"
            placeholder="Password"
            change={setPassword}
            value={password}
          />
          <div className="mt-2">
            <Button
              type="inverted"
              width="100%"
              label="Log In"
            />
            <button className="plain-button">Forgot password?</button>
          </div>
        </form>
        <p className="deserted">Don’t have an account? <button>Sign up</button></p>
      </div>
    </Modal>
  )
}

export default function Landing() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="landing">
        <header className="header">
          <div className="menu">
            <img
              src={require("../assets/images/logo.png").default}
              alt="logo-white"
            />
            <div className="links">
              <a href="/" className="link">
                Home
              </a>
              <a href="/about" className="link">
                About Us
              </a>
              <a href="/support" className="link">
                Support
              </a>
              <a href="/login" className="link">
                Log in
              </a>
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
      </div>
      <LoginModal
        {... { openModal, setOpenModal }}
      />
    </>
  );
}

import React from 'react'
import '../styles/landing.scss'

// components
import Button from '../components/Button';

export default function Landing() {
  return (
    <div className="landing">
      <header className="header">
        <div className="menu">
          <img src={require('../assets/images/logo.png').default} alt="logo-white" />
          <div className="links">
            <a href="#" className="link">Home</a>
            <a href="about us" className="link">About Us</a>
            <a href="supper" className="link">Support</a>
            <a href="login" className="link">Log in</a>
          </div>
        </div>
        <div className="get-started">
          <Button
            label="Get started"
            type="primary"
            action={() => console.log('test 123')}
          />
        </div>
      </header>
      <section className="banner">
        <div className="content">
          <img
            className="right-top-left"
            src={require('../assets/images/small-ring.png').default}
            alt="gsect dashboard" />
          <h1 className="title">Manage your subscriptions in one place</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis.
          </p>
          <div className="actions">
            <Button
              label="Get started"
              type="inverted"
              action={() => console.log('test 123')}
            />
            <Button
              label="Log In"
              type="secondary"
              action={() => console.log('test 123')}
            />
          </div>
        </div>
        <div className="banner-image">
          <img
            className="right-bottom-right"
            src={require('../assets/images/big-ring.png').default}
            alt="gsect dashboard" />
          <img
            className="banner-img"
            src={require('../assets/images/banner-img.png').default}
            alt="gsect dashboard" />
        </div>
      </section>
    </div>
  )
}

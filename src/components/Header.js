import React from 'react'

import logo from '../images/webbidevaus-logo.jpg'
import './Header.scss'

const Header = () => (
  <header>
    <div className="brand-container">
      <img src={logo} alt="logo" />

      <div className="title-container">
        <h1>webbidevaus.fi</h1>
        <h2>Puheradiota webbikehityksestä, suomeksi!</h2>
      </div>
    </div>
    <section className="social">
      <a href="https://twitter.com/webbidevaus">Twitter</a>
      <a href="http://bit.ly/webbidevaus">Kysy kysymys</a>
    </section>
  </header>
)

export default Header

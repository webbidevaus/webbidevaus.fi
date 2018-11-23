import React from 'react'

import './header.css'

const Header = () => (
  <header>
    <div className="brand-container">
      <div>
        <img
          src="https://media.simplecast.com/podcast/logo_image/4497/webbidevaus-logo.jpg"
          alt="logo"
        />
      </div>
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

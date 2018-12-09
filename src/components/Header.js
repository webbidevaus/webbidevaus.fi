import React from 'react'

import './Header.scss'

const Header = () => (
  <header className="site-header wrap">
    <div className="logo">&lt;fi/&gt;</div>

    <section className="social">
      <div className="social__links-wrap">
        <a className="social__link" href="https://twitter.com/webbidevaus">
          Twitter
        </a>
        <a
          className="social__link"
          href="https://rss.simplecast.com/podcasts/4497/rss"
        >
          RSS
        </a>
      </div>
      <a className="button" href="http://bit.ly/webbidevaus">
        Kysy kysymys!
      </a>
    </section>
  </header>
)

export default Header

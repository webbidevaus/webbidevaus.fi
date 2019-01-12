import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-scroll'
import './Header.scss'

export const Header = ({ className }) => (
  <header className={classNames('site-header', className)}>
    <a className="logo-link" href="/">
      <div className="logo">&lt;fi/&gt;</div>
    </a>

    <section className="social">
      <div className="social__links-wrap">
        <a className="social__link" href="https://twitter.com/webbidevaus">
          Twitter
        </a>

        <Link
          to="subscribe"
          className="social__link"
          smooth={true}
          duration={500}
        >
          Tilaa
        </Link>
      </div>
      <a className="button" href="http://bit.ly/webbidevaus">
        Kysy kysymys!
      </a>
    </section>
  </header>
)

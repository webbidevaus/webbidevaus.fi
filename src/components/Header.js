import React from 'react'

import './Header.scss'

const Header = () => (
  <header className="site-header">
    <div className="brand-container">
      <svg
        className="logo"
        viewBox="0 0 163 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="url(#paint0_linear)" d="M0 0h163v163H0z" />
        <path
          d="M51.12 75.208L36.576 80.2l14.544 4.992v8.16l-24.48-8.88v-8.544l24.48-8.88v8.16zm16.758-3.024h5.712v7.92h-5.376V97H57.366V80.104h-3.6v-7.92h3.6v-.144c0-3.424 1.024-6.128 3.072-8.112 2.048-2.016 4.928-3.024 8.64-3.024 1.216 0 2.4.112 3.552.336 1.152.224 2.112.544 2.88.96l-2.592 7.536c-.896-.416-1.712-.624-2.448-.624-.8 0-1.44.256-1.92.768-.448.48-.672 1.232-.672 2.256v.048zm12.576-1.44h10.848V97H80.454V70.744zm5.424-2.112c-1.952 0-3.536-.512-4.752-1.536-1.184-1.056-1.776-2.384-1.776-3.984s.592-2.912 1.776-3.936c1.216-1.056 2.8-1.584 4.752-1.584 1.984 0 3.568.496 4.752 1.488 1.184.992 1.776 2.272 1.776 3.84 0 1.664-.592 3.04-1.776 4.128-1.184 1.056-2.768 1.584-4.752 1.584zm21.745-12.048h9.6l-15.84 45.216h-9.6l15.84-45.216zm34.341 19.344v8.544l-24.48 8.88v-8.16l14.544-4.992-14.544-4.992v-8.16l24.48 8.88z"
          fill="#fff"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            y1="163"
            x2="156.767"
            y2="-5.789"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B2004E" />
            <stop offset="1" stop-color="#D63169" />
          </linearGradient>
        </defs>
      </svg>
      {/* <svg
        className="logo"
        viewBox="0 0 163 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="url(#paint0_linear)" d="M0 0h163v163H0z" />
        <path
          d="M51.12 75.208L36.576 80.2l14.544 4.992v8.16l-24.48-8.88v-8.544l24.48-8.88v8.16zm16.758-3.024h5.712v7.92h-5.376V97H57.366V80.104h-3.6v-7.92h3.6v-.144c0-3.424 1.024-6.128 3.072-8.112 2.048-2.016 4.928-3.024 8.64-3.024 1.216 0 2.4.112 3.552.336 1.152.224 2.112.544 2.88.96l-2.592 7.536c-.896-.416-1.712-.624-2.448-.624-.8 0-1.44.256-1.92.768-.448.48-.672 1.232-.672 2.256v.048zm12.576-1.44h10.848V97H80.454V70.744zm5.424-2.112c-1.952 0-3.536-.512-4.752-1.536-1.184-1.056-1.776-2.384-1.776-3.984s.592-2.912 1.776-3.936c1.216-1.056 2.8-1.584 4.752-1.584 1.984 0 3.568.496 4.752 1.488 1.184.992 1.776 2.272 1.776 3.84 0 1.664-.592 3.04-1.776 4.128-1.184 1.056-2.768 1.584-4.752 1.584zm21.745-12.048h9.6l-15.84 45.216h-9.6l15.84-45.216zm34.341 19.344v8.544l-24.48 8.88v-8.16l14.544-4.992-14.544-4.992v-8.16l24.48 8.88z"
          fill="#fff"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            y1="163"
            x2="156.767"
            y2="-5.789"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E31393" />
            <stop offset="1" stop-color="#E31393" stop-opacity=".59" />
          </linearGradient>
        </defs>
      </svg> */}

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

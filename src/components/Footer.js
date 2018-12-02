import React from 'react'

import './Footer.scss'

export default function footer() {
  return (
    <footer className="footer padded">
      <h1 className="footer__title">Juontajasi</h1>
      <ul className="hosts">
        <li className="host">
          <img
            src="https://avatars2.githubusercontent.com/u/162899?s=460&v=4"
            alt="Antti"
          />
          <div className="host-details">
            <h2>Antti</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <a href="https://twitter.com/anttti">@anttti</a>
          </div>
        </li>
        <li className="host">
          <img
            src="https://avatars3.githubusercontent.com/u/1206987?s=460&v=4"
            alt="Riku"
          />
          <div className="host-details">
            <h2>Riku</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <a href="https://www.w3schools.com">https://www.w3schools.com</a>
          </div>
        </li>
      </ul>
    </footer>
  )
}

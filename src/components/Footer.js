import React from 'react'

import './Footer.scss'

export default function footer() {
  return (
    <footer className="footer padded">
      <h1 className="footer__slogan">
        “Puheradiota webbikehityksestä, suomeksi!”
      </h1>
      <p className="footer__copy">
        Webbidevaus.fi -podcast on internetissä suunnilleen viikoittain
        ilmestyvä, web-kehityksestä kertova suomenkielinen puheradio-ohjelma.
      </p>
      <p className="footer__copy">Webbidevaus.fi on lisensoitu CC BY-NC.</p>

      <h1 className="footer__title small-title">Juontajasi</h1>
      <ul className="hosts">
        <li className="host">
          <img
            src="https://avatars2.githubusercontent.com/u/162899?s=460&v=4"
            alt="Antti Mattila"
          />
          <div className="host-details">
            <h2>Antti Mattila</h2>
            <a href="https://twitter.com/anttti">@anttti</a>
          </div>
        </li>
        <li className="host">
          <img
            src="https://avatars3.githubusercontent.com/u/1206987?s=460&v=4"
            alt="Riku Rouvila"
          />
          <div className="host-details">
            <h2>Riku Rouvila</h2>
            <a href="https://twitter.com/rikurouvila">@rikurouvila</a>
          </div>
        </li>
      </ul>
    </footer>
  )
}

import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => (
  <div>
    <header>
      <img src="" alt="logo" />
      <h1>webbidevaus.fi</h1>
      <h2>Puheradiota webbikehityksestä, suomeksi!</h2>
      <section className="social">
        <a href="https://twitter.com/webbidevaus">Twitter</a>
        <a href="#">Kysy kysymys</a>
      </section>
    </header>
    <main>
      <section className="newest-episodes">
        <div className="newest-podcast" />
        <div className="newest-vlog-entry" />
      </section>
      <ol className="old-episodes">
        {Array.from(Array(6)).map(() => (
          <li>
            <img src="" />
          </li>
        ))}
      </ol>
    </main>
  </div>
)

export default IndexPage

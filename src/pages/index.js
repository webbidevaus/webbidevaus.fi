import React from 'react'
import './index.css'
import { StaticQuery, graphql } from 'gatsby'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allYoutubeVideo {
          edges {
            node {
              id
              title
              description
              videoId
              publishedAt
              privacyStatus
            }
          }
        }
      }
    `}
    render={data =>
      console.log(data) || (
        <div>
          <header>
            <div className="brand-container">
              <img
                src="https://media.simplecast.com/podcast/logo_image/4497/webbidevaus-logo.jpg"
                alt="logo"
              />
              <div className="title-container">
                <h1>webbidevaus.fi</h1>
                <h2>Puheradiota webbikehityksestä, suomeksi!</h2>
              </div>
            </div>
            <section className="social">
              <a href="https://twitter.com/webbidevaus">Twitter</a>
              <a href="#">Kysy kysymys</a>
            </section>
          </header>
          <main>
            <section className="newest-episodes">
              <div className="newest-podcast">
                <h1>
                  <span className="newest-podcast__episode-number">22.</span>
                  Kesäduuni- ja opiskelujakso
                </h1>
                <p>
                  Kauan odotettu kesäduuni- ja opiskelujakso! Vieraana Iiro
                  Mäkelä.
                </p>
                <iframe
                  frameBorder="0"
                  height="200px"
                  scrolling="no"
                  seamless
                  src="https://embed.simplecast.com/01a60a17?color=f5f5f5"
                  width="100%"
                />
              </div>
              <div className="newest-vlog-entry">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ZFnEhwmpjXI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
            <section className="old-episodes">
              <div className="old-episodes__filter">
                Näytä:
                <button>Kaikki</button>
                <button>Podcast-jaksot</button>
                <button>Videojaksot</button>
                <button>Blogipostaukset</button>
              </div>
              <ol className="old-episode-list">
                {Array.from(Array(6)).map((_, id) => (
                  <li key={id} className="old-episode-list__item">
                    <h3>22. Kesäduuni- ja opiskelujakso</h3>
                  </li>
                ))}
              </ol>
            </section>
          </main>
          <footer>
            <h1>Juontajat</h1>
            <ul className="hosts">
              <li className="host">
                <img
                  src="https://avatars2.githubusercontent.com/u/162899?s=460&v=4"
                  alt="Antti"
                />
                <h2>Antti</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <a href="https://twitter.com/anttti">@anttti</a>
              </li>
              <li className="host">
                <img
                  src="https://avatars3.githubusercontent.com/u/1206987?s=460&v=4"
                  alt="Riku"
                />
                <h2>Riku</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <a href="https://www.w3schools.com">
                  https://www.w3schools.com
                </a>
              </li>
            </ul>
          </footer>
        </div>
      )
    }
  />
)

export default IndexPage

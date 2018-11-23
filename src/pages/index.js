import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'

function resultToYoutubeVideos(result) {
  return result.edges.map(({ node }) => ({
    ...node,
    publishedAt: new Date(node.publishedAt),
  }))
}

function resultToSimplecastEpisodes(result) {
  return result.edges.map(({ node }) => ({
    ...node,
    publishedAt: new Date(node.publishedAt),
    embedId: node.sharingUrl.split('/s/')[1],
  }))
}

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
        allEpisode {
          edges {
            node {
              id
              number
              title
              description
              longDescription
              sharingUrl
            }
          }
        }
      }
    `}
    render={({ allYoutubeVideo, allEpisode }) => {
      const youtubeVideosFromLatest = resultToYoutubeVideos(
        allYoutubeVideo
      ).sort(
        (video1, video2) =>
          video2.publishedAt.valueOf() - video1.publishedAt.valueOf()
      )

      const [latestEpisode, ...otherEpisodes] = resultToSimplecastEpisodes(
        allEpisode
      )
      const [latestVlog] = youtubeVideosFromLatest

      return (
        <div>
          <Header />
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
                  title={latestEpisode.title}
                  seamless
                  src={`https://embed.simplecast.com/${
                    latestEpisode.embedId
                  }?color=f5f5f5`}
                  width="100%"
                />
              </div>
              <div className="newest-vlog-entry">
                <iframe
                  width="560"
                  height="315"
                  title="video-title-here"
                  src={`https://www.youtube.com/embed/${latestVlog.videoId}`}
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
                {otherEpisodes.map(({ id, number, title }) => (
                  <li key={id} className="old-episode-list__item">
                    <h3>{title}</h3>
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
    }}
  />
)

export default IndexPage

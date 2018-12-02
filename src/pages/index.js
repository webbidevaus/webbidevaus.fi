import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

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

function episodeTitleWithoutNumber(title) {
  return title.replace(/^\d*. /, '')
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
              published
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
      ).filter(({ published }) => published)
      const [latestVlog] = youtubeVideosFromLatest

      return (
        <div>
          <Header />
          <main>
            <section className="newest-episodes">
              <div className="feature newest-podcast">
                <h1>
                  <span className="newest-podcast__episode-number">
                    {latestEpisode.number}.
                  </span>
                  {episodeTitleWithoutNumber(latestEpisode.title)}
                </h1>
                <p>{latestEpisode.description}</p>
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
              <div className="feature newest-vlog-entry">
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
                  <li key={id} className="old-episode">
                    <h3 className="old-episode__number">{number}</h3>
                    <h3 className="old-episode__title">
                      {episodeTitleWithoutNumber(title)}
                    </h3>
                  </li>
                ))}
              </ol>
            </section>
          </main>
          <Footer />
        </div>
      )
    }}
  />
)

export default IndexPage

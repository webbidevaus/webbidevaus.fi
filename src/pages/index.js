import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import Meta from '../components/Meta'
import Player from '../components/Player'

import {
  resultToYoutubeVideos,
  episodeTitleWithoutNumber,
  resultToPodcastEpisodes,
} from '../episodes'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        {
          allYoutubeVideo {
            edges {
              node {
                videoId
                title
                thumbnail {
                  url
                }
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
                duration
                publishedAt
              }
            }
          }
        }
      `}
      render={({ allYoutubeVideo, allEpisode }) => {
        const youtubeVideosFromLatest = resultToYoutubeVideos(allYoutubeVideo)

        const [latestEpisode, ...otherEpisodes] = resultToPodcastEpisodes(
          allEpisode
        )
        const [latestVlog] = youtubeVideosFromLatest

        return (
          <>
            <div className="hero">
              <Header className={classNames('hero__header', 'wrap')} />

              <section className="features padded wrap">
                <div className="feature feature--podcast">
                  <h3 className="feature__title small-title">
                    Uusin podcast-jakso
                  </h3>
                  <div className="newest-podcast">
                    <h1 className="newest-podcast__number">
                      {latestEpisode.number}
                    </h1>

                    <div className="newest-podcast__content">
                      <h1 className="newest-podcast__title">
                        <span className="newest-podcast__title-number">
                          {latestEpisode.number}.{' '}
                        </span>
                        {episodeTitleWithoutNumber(latestEpisode.title)}
                      </h1>

                      <Meta
                        publishedAt={latestEpisode.publishedAt}
                        duration={latestEpisode.duration}
                        isLight
                        isShort
                      />

                      <p className="newest-podcast__description">
                        {latestEpisode.description}
                      </p>

                      <p className="newest-podcast__description">
                        <a href={`/${latestEpisode.number}`}>
                          Tarkempi kuvaus ja linkit...
                        </a>
                      </p>

                      <Player
                        audioSrc={`https://audio.simplecast.com/${
                          latestEpisode.embedId
                        }.mp3`}
                      />
                    </div>
                  </div>
                </div>

                <div className="feature newest-vlog-entry">
                  <h3 className="newest-vlog-entry__title small-title">
                    Uusin videojakso
                  </h3>
                  <div className="newest-vlog-entry__container">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.youtube.com/watch?v=${
                        latestVlog.videoId
                      }`}
                    >
                      <img
                        src={latestVlog.thumbnail.url}
                        alt={latestVlog.title}
                      />
                      <svg viewBox="0 0 459 459">
                        <circle cx="50%" cy="50%" r="50%" />
                        <path d="M229.5 0C102.751 0 0 102.751 0 229.5S102.751 459 229.5 459 459 356.249 459 229.5 356.249 0 229.5 0zm80.792 239.651l-111.764 76.084a12.281 12.281 0 0 1-19.19-10.151V153.416a12.281 12.281 0 0 1 19.19-10.151l111.764 76.084a12.28 12.28 0 0 1 0 20.302z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <section className="old-episodes">
              <div className="old-episodes__container padded wrap">
                {/* <div className="old-episodes__filter">
                  Näytä:
                  <button className="filter-button filter-button--active">
                    Kaikki
                  </button>
                  <button className="filter-button">Podcast-jaksot</button>
                  <button className="filter-button">Videojaksot</button>
                  <button className="filter-button">Blogipostaukset</button>
                </div> */}
                <ol className="old-episode-list">
                  {otherEpisodes.map(({ id, number, title, description }) => (
                    <li key={id} className="old-episode">
                      <a href={`/${number}`}>
                        <header className="old-episode__header small-title">
                          Podcast-jakso
                        </header>
                        <section className="old-episode__content">
                          <h3 className="old-episode__number">{number}</h3>
                          <div>
                            <h3 className="old-episode__title">
                              {episodeTitleWithoutNumber(title)}
                            </h3>
                            <p>{description}</p>
                          </div>
                        </section>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <Footer />
          </>
        )
      }}
    />
  </Layout>
)

export default IndexPage

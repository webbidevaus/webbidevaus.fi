import React from 'react'
import Markdown from 'react-markdown'
import classNames from 'classnames'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

import { nodeToPodcastEpisode, episodeTitleWithoutNumber } from '../episodes'

import './template.scss'

function formatDate(date) {
  const monthNames = [
    'tammikuuta',
    'helmikuuta',
    'maaliskuuta',
    'huhtikuuta',
    'toukokuuta',
    'kesäkuuta',
    'heinäkuuta',
    'elokuuta',
    'syyskuuta',
    'lokakuuta',
    'marraskuuta',
    'joulukuuta',
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${day}. ${monthNames[monthIndex]} ${year}`
}

const formatTime = durationInSeconds => {
  const hours = Math.floor(durationInSeconds / 3600)
  const minutes = Math.floor((durationInSeconds - hours * 3600) / 60)
  const seconds = durationInSeconds % 60

  const pad = n => (n < 10 ? `0${n}` : n)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const EpisodeTemplate = props => {
  const episode = nodeToPodcastEpisode(props.pageContext)

  return (
    <Layout>
      <div className="hero hero--single">
        <Header className={classNames('hero__header', 'wrap')} />
      </div>

      <section className="episode">
        <h3 className="episode__number small-title">Jakso {episode.number}</h3>
        <div className="episode__body">
          <h1 className="episode__title">
            {episodeTitleWithoutNumber(episode.title)}
          </h1>

          <div class="episode__info">
            <h2 className="episode__meta small-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="episode__meta-icon icon-calendar"
              >
                <path
                  className="primary"
                  fill="#373868"
                  d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"
                />
                <path
                  className="secondary"
                  fill="#373868"
                  d="M7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"
                />
              </svg>
              <span className="episode__meta-title">
                {formatDate(episode.publishedAt)}
              </span>
            </h2>

            <h2 className="episode__meta small-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="episode__meta-icon icon-time"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  className="primary"
                  fill="#373868"
                />
                <path
                  className="secondary"
                  fill="white"
                  d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"
                />
              </svg>
              <span className="episode__meta-title">
                {formatTime(episode.duration)}
              </span>
            </h2>
          </div>

          {/* <PodcastPlayer title={episode.title} embedId={episode.embedId} /> */}

          <div className="episode__player">
            <audio
              id="main-audio"
              controls="controls"
              preload="none"
              width="100%"
            >
              <source
                src={`https://audio.simplecast.com/${episode.embedId}.mp3`}
                type="audio/mpeg"
              />
            </audio>
          </div>

          <div className="episode__shownotes">
            <Markdown source={episode.longDescription} linkTarget="_blank" />
          </div>
        </div>
      </section>

      <Footer isSingle />
    </Layout>
  )
}

export default EpisodeTemplate

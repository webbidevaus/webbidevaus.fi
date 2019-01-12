import React from 'react'
import Markdown from 'react-markdown'
import classNames from 'classnames'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { PodcastPlayer } from '../components/PodcastPlayer'

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
          <h2 className="episode__date small-title">
            {formatDate(episode.publishedAt)}
          </h2>

          <div className="episode__player">
            <PodcastPlayer title={episode.title} embedId={episode.embedId} />
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

import React from 'react'
import Markdown from 'react-markdown'
import classNames from 'classnames'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import Player from '../components/Player'
import Meta from '../components/Meta'

import { nodeToPodcastEpisode, episodeTitleWithoutNumber } from '../episodes'

import './template.scss'

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

          {episode.description && (
            <p className="episode__description">{episode.description}</p>
          )}

          <Meta publishedAt={episode.publishedAt} duration={episode.duration} />

          <div className="episode__player">
            <Player audioSrc={episode.audioFile.url} isDark />
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

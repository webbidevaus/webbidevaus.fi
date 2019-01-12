import React from 'react'
import Markdown from 'react-markdown'

import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { PodcastPlayer } from '../components/PodcastPlayer'

import { nodeToPodcastEpisode } from '../episodes'

import './template.scss'

const EpisodeTemplate = props => {
  const episode = nodeToPodcastEpisode(props.pageContext)

  return (
    <Layout>
      <Header />

      <section className="episode">
        <h1>{episode.title}</h1>
        <PodcastPlayer title={episode.title} embedId={episode.embedId} />
        <Markdown source={episode.longDescription} />
      </section>
    </Layout>
  )
}

export default EpisodeTemplate

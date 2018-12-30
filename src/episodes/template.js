import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { nodeToPodcastEpisode } from '../episodes'

import './template.scss'
import { PodcastPlayer } from '../components/PodcastPlayer'

const EpisodeTemplate = props => {
  const episode = nodeToPodcastEpisode(props.pageContext)

  return (
    <Layout>
      <Header />

      <section className="episode">
        <PodcastPlayer title={episode.title} embedId={episode.embedId} />
        <Markdown source={episode.longDescription} />
      </section>
    </Layout>
  )
}

export default EpisodeTemplate

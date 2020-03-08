import React from 'react'
import Player from '../components/Player'

import { nodeToPodcastEpisode } from '../episodes'

import './template.scss'
import './embed.scss'

const EmbedTemplate = props => {
  const episode = nodeToPodcastEpisode(props.pageContext)

  return <Player audioSrc={episode.audioFile.url} isDark />
}

export default EmbedTemplate

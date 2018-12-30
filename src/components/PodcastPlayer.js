import React from 'react'

export function PodcastPlayer({ title, embedId }) {
  return (
    <iframe
      frameBorder="0"
      height="36px"
      scrolling="no"
      seamless
      title={title}
      src={`https://simplecast.com/e/${embedId}?style=light`}
      width="100%"
    />
  )
}

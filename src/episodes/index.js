export function resultToYoutubeVideos(result) {
  return result.edges
    .map(({ node }) => ({
      ...node,
      publishedAt: new Date(node.publishedAt),
    }))
    .sort(
      (video1, video2) =>
        video2.publishedAt.valueOf() - video1.publishedAt.valueOf()
    )
}

export function nodeToPodcastEpisode(node) {
  return {
    ...node,
    publishedAt: new Date(node.publishedAt),
    embedId: node.sharingUrl.split('/s/')[1],
  }
}

export function resultToPodcastEpisodes(result) {
  return result.edges
    .map(({ node }) => ({
      ...node,
      publishedAt: new Date(node.publishedAt),
      embedId: node.sharingUrl.split('/s/')[1],
    }))
    .filter(({ published }) => published)
}

export function episodeTitleWithoutNumber(title) {
  return title.replace(/^\d*. /, '')
}

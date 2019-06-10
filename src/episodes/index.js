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
  }
}

export function resultToPodcastEpisodes(result) {
  return result.edges
    .map(({ node }) => ({
      ...node,
      publishedAt: new Date(node.publishedAt),
    }))
    .filter(({ isPublished }) => isPublished)
}

export function episodeTitleWithoutNumber(title) {
  return title.replace(/^\d*. /, '')
}

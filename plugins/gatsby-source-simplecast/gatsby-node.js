const fetch = require('node-fetch')
const humps = require('humps')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  const processEpisode = episode => {
    const nodeId = createNodeId(`episode-${episode.id}`)
    const episodeWithCamelCaseFields = humps.camelizeKeys(episode)
    const nodeContent = JSON.stringify(episodeWithCamelCaseFields)

    const nodeData = Object.assign({}, episodeWithCamelCaseFields, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Episode`,
        content: nodeContent,
        contentDigest: createContentDigest(episodeWithCamelCaseFields),
      },
    })

    return nodeData
  }

  const apiUrl = `https://api.simplecast.com/v1/podcasts/${
    configOptions.podcastId
  }/episodes.json`

  return fetch(apiUrl, {
    headers: {
      Authorization: `Basic ${Buffer.from(configOptions.apiKey).toString(
        'base64'
      )}`,
    },
  })
    .then(response => response.json())
    .then(async episoders => {
      episoders.forEach(episode => {
        const nodeData = processEpisode(episode)
        createNode(nodeData)
      })
    })
}

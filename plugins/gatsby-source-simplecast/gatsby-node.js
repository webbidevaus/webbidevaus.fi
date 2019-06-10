const fetch = require('node-fetch')
const humps = require('humps')

exports.sourceNodes = async (
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

  const episodeListingUrl = `https://api.simplecast.com/podcasts/${
    configOptions.podcastId
  }/episodes?count=999`

  const episodeUrl = id => `https://api.simplecast.com/episodes/${id}`

  const requestOpts = {
    headers: {
      Authorization: `Basic ${configOptions.apiKey}`,
    },
  }
  let request
  if (configOptions.apiKey) {
    request = fetch(episodeListingUrl, requestOpts)
      .then(response => response.json())
      .then(response =>
        Promise.all(
          response.collection.map(({ id }) =>
            fetch(episodeUrl(id), requestOpts).then(res => res.json())
          )
        )
      )
  } else {
    request = Promise.resolve(require('./mock-data.json'))
  }

  const response = await request

  response.forEach(episode => {
    const nodeData = processEpisode(episode)
    createNode(nodeData)
  })
}

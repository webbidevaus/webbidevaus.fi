// Temporary fix for youtube plugin
// https://github.com/gatsbyjs/gatsby/issues/1818
require('babel-polyfill')

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Webbidevaus.fi',
    siteUrl: 'https://webbidevaus.fi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#d12d66',
        theme_color: '#d12d66',
        display: 'minimal-ui',
        icon: './src/images/app-icon.png',
      },
    },
    {
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: process.env.YOUTUBE_CHANNEL_ID,
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-simplecast`,
      options: {
        podcastId: process.env.SIMPLECAST_PODCAST_ID,
        apiKey: process.env.SIMPLECAST_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allEpisode } }) => {
              return (
                allEpisode.edges
                  // Filter out not yet published episodes
                  .filter(edge => edge.node.published)
                  .map(edge => {
                    const { title, description } = edge.node
                    const url = `${site.siteMetadata.siteUrl}/${
                      edge.node.number
                    }`
                    const maxDescriptionLength = 260 - title.length - url.length
                    const truncatedDescription =
                      description.length > maxDescriptionLength
                        ? `${description.substr(0, maxDescriptionLength)}...`
                        : description

                    return Object.assign({}, edge.node.frontmatter, {
                      title,
                      date: edge.node.publishedAt,
                      url,
                      guid: site.siteMetadata.siteUrl + edge.node.id,
                      description: truncatedDescription,
                    })
                  })
              )
            },
            query: `
              {
                allEpisode(
                  sort: { order: DESC, fields: [number] }
                ) {
                  edges {
                    node {
                      id
                      number
                      title
                      publishedAt
                      description
                      published
                    }
                  }
                }
              }
            `,
            output: '/sync.xml',
            title: 'Webbidevaus.fi webhook feed',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

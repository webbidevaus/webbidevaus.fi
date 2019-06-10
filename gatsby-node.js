const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page)
    // Remove trailing slash unless page is /
    page.path = replacePath(page.path)
    if (page.path !== oldPage.path) {
      // Replace new page with old page
      deletePage(oldPage)
      createPage(page)
    }
    resolve()
  })
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allEpisode {
          edges {
            node {
              id
              number
              title
              description
              longDescription
              audioFile {
                url
              }
              isPublished
              publishedAt
              duration
            }
          }
        }
      }
    `).then(result => {
      result.data.allEpisode.edges.forEach(({ node }) => {
        createPage({
          path: node.number.toString(),
          component: path.resolve(`./src/episodes/template.js`),
          context: node,
        })
      })
      resolve()
    })
  })
}

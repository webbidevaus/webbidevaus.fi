import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import cover from './cover.jpg'
import './Layout.scss'

export const Layout = ({ children, episode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const title = episode
        ? `${episode.title} - ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title

      const description = episode
        ? episode.description
        : 'Webbidevaus.fi - Puheradiota web-kehityksestä Suomeksi!'

      const url = episode
        ? `https://webbidevaus.fi/${episode.number}`
        : `https://webbidevaus.fi/`

      const metaTags = [
        { name: 'title', content: title },
        { name: 'keywords', content: 'webbidevaus, web dev, podcast' },
        {
          name: 'description',
          content: description,
        },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: cover },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: description },
        { property: 'twitter:url', content: url },
        { property: 'twitter:image', content: cover },
        { property: 'twitter:card', content: 'summary_large_image' },
      ]

      return (
        <>
          <Helmet title={title} meta={metaTags}>
            <link
              rel="alternate"
              type="application/rss+xml"
              title="Webbidevaus.fi RSS"
              href="https://feeds.simplecast.com/wFD5mVlw"
            />
            <html lang="en" />
          </Helmet>

          {children}
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  episode: PropTypes.object,
}

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './Layout.scss'

export const Layout = ({ children }) => (
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
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Webbidevaus.fi - Puheradiota web-kehityksestä Suomeksi!',
            },
            { name: 'keywords', content: 'webbidevaus, web dev, podcast' },
          ]}
        >
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
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

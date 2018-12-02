import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import './Layout.css'

const Layout = ({ children }) => (
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
          <html lang="en" />
        </Helmet>

        <Header />
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

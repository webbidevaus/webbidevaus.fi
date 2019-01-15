import React from 'react'
import classNames from 'classnames'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

import './template.scss'
import './syntax.scss'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="hero hero--single">
        <Header className={classNames('hero__header', 'wrap')} />
      </div>

      <section className="page">
        <h3 className="page__number small-title">{frontmatter.date}</h3>
        <div className="page__body">
          <h1 className="page__title">{frontmatter.title}</h1>

          <div
            className="page__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      <Footer isSingle />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

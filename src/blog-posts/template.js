import React from 'react'
import classNames from 'classnames'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import Meta from '../components/Meta'

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
        <div className="page__body">
          <h1 className="page__title">{frontmatter.title}</h1>

          <Meta publishedAt={new Date(Date.parse(frontmatter.date))} />

          <div
            className="page__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <footer className="page__by">Kirjoittanut {frontmatter.writer}</footer>
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
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`

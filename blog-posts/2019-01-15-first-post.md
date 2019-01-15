---
path: '/blog/first-post'
date: '2019-01-15'
title: 'First Post'
---

This is a test post. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a test post. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# This is heading level 1

This is a test post. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

## This is heading level 2

This is a test post. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

### This is heading level 3

This is a test post. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid.

Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```jsx
import React from 'react'
import classNames from 'classnames'

import './Meta.scss'

function formatDate(date, isShort) {
  const monthNames = [
    'tammikuuta',
    'helmikuuta',
    'maaliskuuta',
    'huhtikuuta',
    'toukokuuta',
    'kesäkuuta',
    'heinäkuuta',
    'elokuuta',
    'syyskuuta',
    'lokakuuta',
    'marraskuuta',
    'joulukuuta',
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  if (isShort) {
    return `${day}.${monthIndex + 1}.${year}`
  }
  return `${day}. ${monthNames[monthIndex]} ${year}`
}

const formatTime = durationInSeconds => {
  const hours = Math.floor(durationInSeconds / 3600)
  const minutes = Math.floor((durationInSeconds - hours * 3600) / 60)
  const seconds = durationInSeconds % 60

  const pad = n => (n < 10 ? `0${n}` : n)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

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
```

- This is a list
- This is a list
- This is a list
- This is a list

## Second level heading

Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea.

1. Ordered list
2. Ordered list
3. Ordered list
4. Ordered list

Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

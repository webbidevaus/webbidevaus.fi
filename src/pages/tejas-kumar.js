import React from 'react'
import Episode from '../episodes/template'

const episode = {
  title: 'React Finland - Interview with Tejas Kumar',
  number: 47,
  publishedAt: new Date('2019-06-17T14:47:42.458Z'),
  longDescription: `
  ### Tejas Kumar **[@TejasKumar_](https://twitter.com/tejaskumar_)**

  Talk: [Scalable Design Systems with TypeScript](https://www.youtube.com/watch?v=ZsBW4S8hYMU)

  **Linkit**

  - [https://github.com/contiamo/operational-ui](https://github.com/contiamo/operational-ui)
  `,
  duration: 1061,
  audioFile: {
    url: '/tejas.mp3',
  },
}

const Page = () => <Episode pageContext={episode} />

export default Page

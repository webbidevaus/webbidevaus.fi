import React from 'react'
import Episode from '../episodes/template'

const episode = {
  title: 'React Finland - Interview with Tejas Kumar',
  number: 47,
  shortDescription: `
    230 type errors to an incredible type safe codebase? Hit play and hear how.
    Tejas, Antti and Riku chat about TypeScript, about whether it's too difficult to adopt and how it could still be improved as a language?
  `,
  publishedAt: new Date('2019-06-17T14:47:42.458Z'),
  longDescription: `
  ### Tejas Kumar **[@TejasKumar_](https://twitter.com/tejaskumar_)**

  Talk: [Scalable Design Systems with TypeScript](https://www.youtube.com/watch?v=ZsBW4S8hYMU)

  **Links**

  - [operational-ui](https://github.com/contiamo/operational-ui)

  **🙏 Thanks a lot Tejas!**
  `,
  duration: 1061,
  audioFile: {
    url: '/tejas.mp3',
  },
}

const Page = () => <Episode pageContext={episode} />

export default Page

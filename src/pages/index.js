import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='곧 결혼하는...'
        src='https://dimg.donga.com/wps/NEWS/IMAGE/2022/07/25/114638487.2.jpg'
        //src="../images/261143.jpg"
      />
    </Layout>
  )
}
export default IndexPage
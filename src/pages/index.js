// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import { navLinkText } from '../components/layout.module.css'

// TODO set newest edition link to point to newest edition each month--automate? document either way
//  - update index.js, archive.js, layout.js string literals to reflect change in URL
//  - maybe keep track of a newest edition global variable

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to the RENCI Internal Newsletter Web Application!</p>
      <div>
        <span>Check out our newest edition here! </span>
        <Link to="/archive/2024-05/4.5" className={navLinkText}>
          Visit
        </Link>
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
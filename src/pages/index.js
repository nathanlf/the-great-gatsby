import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Link } from 'gatsby'
import { navLinkText } from "../styles/layout.module.css"

// TODO set newest edition link to point to newest edition each month--automate? document either way
//  - update index.js, archive.js, layout.js string literals to reflect change in URL
//  - maybe keep track of a newest edition global variable

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

export const Head = () => <Seo title="Home Page" />

export default IndexPage
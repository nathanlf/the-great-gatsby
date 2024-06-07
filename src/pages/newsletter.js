import * as React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
//import { MDXRenderer } from "gatsby-mdx-fix"
import NewestEdition from "../../newsletter-issues/internal-newsletter-v4-i5.mdx"

// {children} ? instead of MDXRenderer?
const NewsletterPage = () => {
    return (
        <Layout pageTitle="Newest Edition">
          <NewestEdition />
        </Layout>
      )
}

export const query = graphql`
  query {
    mdx(frontmatter: {slug: {eq: "newsletter-v4-i1"}}) {
      id
    }
  }
`

export const Head = () => <Seo title="Newsletter View" />

export default NewsletterPage
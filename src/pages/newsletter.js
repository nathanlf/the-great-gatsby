import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
//import { MDXRenderer } from "gatsby-mdx-fix"
//import NewestEdition from "../../newsletter-issues/internal-newsletter-v4-i5.mdx"

const NewsletterPage = ( {data} ) => {
    console.log(data);
    return (
      <Layout pageTitle="Newest Edition">
        <section dangerouslySetInnerHTML={{ __html: data.html }} itemProp="articleBody" />
      </Layout>
    )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {slug: {eq: "newsletter-v4-i5"}}) {
      id
      html
    }
  }
`

export const Head = () => <Seo title="Newsletter View" />

export default NewsletterPage
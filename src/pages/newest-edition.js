import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
//import { MDXRenderer } from "gatsby-mdx-fix"
//import NewestEdition from "../../newsletter-issues/..."

const NewestEditionPage = ( {data} ) => {
    console.log(data);
    return (
      <Layout pageTitle="Newest Edition">
        <section dangerouslySetInnerHTML={{ __html: data.html }} itemProp="articleBody" />
      </Layout>
    )
}

// not dynamic, manually updating this as of now (the string literal "4.5")
export const query = graphql`
  query {
    markdownRemark(frontmatter: {edition: {eq: "4.5"}}) {
      id
      html
    }
  }
`

export const Head = () => <Seo title="Newest Newsletter" />

export default NewestEditionPage
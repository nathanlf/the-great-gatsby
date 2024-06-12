import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default function NewsletterIssue({ data }) {
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <h1>{data.markdownRemark.frontmatter.date}</h1>
      <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} itemProp="articleBody" />
    </Layout>
  )
}

export const query = graphql`
  query Issue($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
      }
      html
    }
  }
`
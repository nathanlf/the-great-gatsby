import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import TableOfContents from "../components/TableOfContents"
import { Markdown } from "../components/Markdown"


export default function NewsletterIssue({ data }) {
  const { title, date } = data.markdownRemark.frontmatter
  const { rawMarkdownBody, htmlAst } = data.markdownRemark;
  
  // loop through top level items in htmlAst to identify headings
  //    - need to get the heading name and heading URL path (i.e. "Notes from OOD" and "#notes-from-ood") to link and display
  //    - loop through htmlAst object to ind where a structure like this exists:
  const headers = []

  // Traverse htmlAst to find h1 elements
  htmlAst.children.forEach((child) => {
  if (child.tagName === 'h1') {
    // Extract text value of header
    const headerName = child.children.find(el => el.type === 'text').value;

    // Store in headers array
    headers.push(headerName);
    }
  });



  return (
    <Layout pageTitle={ title }>
      <h3>{ date }</h3>
      <TableOfContents headers={ headers } />

      <Markdown src = {rawMarkdownBody} />
      
      {/* <section dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" /> */}
    </Layout>
  )
}

export const query = graphql`
  query NewsletterIssue($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
      }
      rawMarkdownBody
      htmlAst
    }
  }
`
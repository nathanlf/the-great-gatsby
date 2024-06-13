import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SectionHeader from "../components/SectionHeader"
import TableOfContents from "../components/TableOfContents"


export default function NewsletterIssue({ data }) {
  const { title, date } = data.markdownRemark.frontmatter
  const { html, htmlAst } = data.markdownRemark;
  
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

// Make table of contents that slugifies headerName and links it
/* <TableOfContents headers = { headers } /> */
/* link logic should be in TableOfContents <Link to="/archive/2024-01/4.1/#notes-from-ood">Notes From OOD</Link> */

  return (
    <Layout pageTitle={ title }>
      <h3>{ date }</h3>
      <TableOfContents headers={ headers } />
      <section dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" />
    </Layout>
  )
}

// ### Table of Contents for 4.1
// - [Notes from OOD](#notes-from-ood)
// - [Projects, Funding, and Awards](#projects-funding-and-awards)
// - [ACIS Messages](#acis-messages)
// - [Finance Messages](#finance-messages)
// - [Dashbaord Updates](#dashboard-updates)
// - [Diversity, Equity, and Inclusion](#diversity-equity-and-inclusion)
// - [Proposals](#proposals)
// - [Professional Development](#professional-development)
// - [Announcements](#announcements)
// - [Upcoming Events](#upcoming-events)
// - [Ongoing Initiatives](#ongoing-initiatives)

export const query = graphql`
  query NewsletterIssue($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
      }
      html
      htmlAst
    }
  }
`
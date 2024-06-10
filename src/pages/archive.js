import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
//import { MDXRenderer } from "gatsby-plugin-mdx"
//import { MDXRenderer } from "gatsby-mdx-fix"


const ArchivePage = ({ data }) => {
  return (
    <Layout pageTitle="Archive">
      {
        data.allMarkdownRemark.nodes.map((node) => (
          <Link to={node.frontmatter.slug} key={node.id}>
            <div>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p> 
            </div>
          </Link>
        ))
      }
    </Layout>
  )
}

// TODO: query for "blurb" instead of "excerpt"

export const query = graphql`
    query {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
            id
            excerpt
        }
    }
  }
`

export const Head = () => <Seo title="Newsletter Archive" />

export default ArchivePage
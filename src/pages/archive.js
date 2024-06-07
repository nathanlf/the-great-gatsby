import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
//import { MDXRenderer } from "gatsby-plugin-mdx"
//import { MDXRenderer } from "gatsby-mdx-fix"


const ArchivePage = ({data, children}) => {
  return (
    <Layout pageTitle="Archive">
      {
        data.allMdx.nodes.map((node) => (
            <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
                <p>{children}</p>
            </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
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
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Layout/Seo'


const ArchivePage = ({ data }) => {
  return (
    <Layout pageTitle="Archive">
      {
        data.allMarkdownRemark.nodes.map((node) => (
          <div>
            <Link to={ (node.frontmatter.date + "/" + node.frontmatter.edition) } key={node.id}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <h3>Posted: {node.frontmatter.date}</h3>
            <p>{node.frontmatter.blurb}</p> 
          </div>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    date
                    title
                    edition
                    blurb
                }
            id
        }
    }
  }
`

export const Head = () => <Seo title="Newsletter Archive" />

export default ArchivePage
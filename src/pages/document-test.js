import * as React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const DocumentPage = () => {
    return (
        <Layout pageTitle="Testing things">
          <p>Hi there! testing some things</p>
        </Layout>
      )
}

// export const query = graphql`
//     query {
//         // google docs
//     }
//   }
// `

export const Head = () => <Seo title="Document things" />

export default DocumentPage
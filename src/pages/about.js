// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>This web application was built to serve as a new home for RENCI's internal newsletter.</p>
      <p>Feel free to view newsletters from the past, search for keywords, or check out this month's edition!</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About</title>
  </>
)
  

// Step 3: Export your component
export default AboutPage
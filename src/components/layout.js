import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    return (
    <div className={container}>
      <img src="/renci-logo.png" alt="RENCI Logo" style={{ maxWidth: '100%' }}/>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
                Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
                About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/archive" className={navLinkText}>
                Archive
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/archive/2024-05/4.5" className={navLinkText}>
                Newest Edition
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    )
}

export default Layout
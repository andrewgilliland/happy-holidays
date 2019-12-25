import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        // style={{
        //   display: `flex`,
        //   flexDirection: `column`,
        //   justifyContent: `center`,
        //   alignItems: `center`,
        // }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Lindsay and Andrew</footer>
      </div>

      {/* <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin
      />

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin
      />

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin
      /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

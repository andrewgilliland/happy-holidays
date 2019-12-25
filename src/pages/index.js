import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Carousel"

import "bootstrap/dist/css/bootstrap.min.css"
import image2 from "../images/IMG_5868.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="primary">
      <div className="container-flex">
        <h1 className="primary-heading">Happy Holidays</h1>
        <img className="primary-photo" src={image2} alt="" />
        {/* <Carousel /> */}
        <p className="primary-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, iusto
          corrupti ut ex libero aliquid.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

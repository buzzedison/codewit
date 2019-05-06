import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

import pic11 from "../images/kids3.jpg"

const Success = props => (
  <Layout>
    <Helmet>
      <title>Codewit Form Completion Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Codewit Form Completion Success Page</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            Thank you for applying to Codewit. We will get back to you asap!
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success

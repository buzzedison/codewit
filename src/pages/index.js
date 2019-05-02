import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "mdbreact/dist/css/mdb.css"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div>
      <h1> test</h1>
    </div>
  </Layout>
)

export default IndexPage

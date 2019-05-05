import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "mdbreact/dist/css/mdb.css"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Features from "../components/features"
import Summer from "../components/summer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Codewit`, `Code school`, `programming`]} />

    <div>
      <Intro />
      <Features />
      <Summer />
    </div>
  </Layout>
)

export default IndexPage

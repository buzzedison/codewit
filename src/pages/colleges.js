import React from "react"

import Layout from "../components/layout"
import CollegeForm from "../components/collegeform"
import SEO from "../components/seo"

const College = () => {
  return (
    <Layout>
      <SEO title="Apply" keywords={[`Codewit`, `Code school`, `programming`]} />

      <div>
        <h4
          style={{
            fontSize: "40px",
            textAlign: "center",
            paddingTop: 20,
            paddingBottom: 10,
            color: "green",
          }}
        >
          {" "}
          CODING BOOTCAMP FOR COLLEGES
        </h4>
        <CollegeForm />
      </div>
    </Layout>
  )
}

export default College

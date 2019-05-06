import React from "react"

import Layout from "../components/layout"
import KidsSummerForms from "../components/kidsforms"
import SEO from "../components/seo"

const child = () => {
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
          Coding for Kids Summer program
        </h4>
        <KidsSummerForms />
      </div>
    </Layout>
  )
}

export default child

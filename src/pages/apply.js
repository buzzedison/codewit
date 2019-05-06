import React from "react"

import Layout from "../components/layout"
import CodewitApply from "../components/codewitapply"
import SEO from "../components/seo"
const Courses = () => {
  return (
    <Layout>
      <SEO title="Apply" keywords={[`Codewit`, `Code school`, `programming`]} />

      <div>
        <h2
          style={{
            fontSize: "40px",
            textAlign: "center",
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          {" "}
          (Second Co-hort)Coding School Registration
        </h2>
        <CodewitApply />
      </div>
    </Layout>
  )
}

export default Courses

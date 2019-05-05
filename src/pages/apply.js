import React from "react"

import Layout from "../components/layout"
import CodewitApply from "../components/codewitapply"
const Courses = () => {
  return (
    <Layout>
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

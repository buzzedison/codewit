import React from "react"
import Aboutintro from "../components/aboutintro"
import Layout from "../components/layout"
const About = () => {
  return (
    <Layout>
      <div>
        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          {" "}
          About Codewit
        </h2>
        <Aboutintro />
      </div>
    </Layout>
  )
}

export default About

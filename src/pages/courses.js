import React from "react"
import MainCourses from "../components/coursesmain"
import Layout from "../components/layout"
import CoursesOther from "../components/coursesother"
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
          Our Courses
        </h2>
        <MainCourses />
        <CoursesOther />
      </div>
    </Layout>
  )
}

export default Courses

import React from "react"
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from "mdbreact"
import KIDS from "../images/kids.jpg"
import CODING from "../images/coding.jpg"
import COLLEGE from "../images/college.jpg"
const Summer = () => {
  return (
    <section
      className="text-center my-5"
      style={{ paddingRight: "20px", paddingLeft: "30px" }}
    >
      <h2 className="h1-responsive font-weight-bold my-5">
        Programs this Summer
      </h2>
      <p className="dark-text w-responsive mx-auto mb-5">
        We have specialized, tailor made programs for people of all ages.
        <p>
          Programs for kids, Women in ict, High school and University students
          and for everyone.
        </p>
      </p>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img src={KIDS} alt="" className="summerImage" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">CODING FOR KIDS</h4>
            <p className="grey-text">
              Get your kids learning to code in no time. HTML, CSS, JavaScript,
              Python, Scratch. Tuition: GHC 550 only. 4 weeks/One month.
              Classroom lessons. Once or twice per week.{" "}
              <strong> June or July</strong>
            </p>
            <MDBBtn color="primary" size="sm" href="/kids">
              <MDBIcon far icon="clone" className="left" /> REGISTER NOW!
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img src={CODING} alt="" className="summerImage" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">CODE SCHOOL FOR ADULTS</h4>
            <p className="grey-text">
              Join our second co-hort starting in August 2019. Apply from
              anywhere in the world to take our online courses, or from Accra,
              Kumasi and Takoradi to take our on campus courses. You can attend
              for free. Guranteed jobs available.
            </p>
            <MDBBtn color="primary" size="sm" href="/apply">
              <MDBIcon far icon="clone" className="left" /> APPLY NOW
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img src={COLLEGE} alt="" className="summerImage" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">
              CODING BOOTCAMP FOR COLLEGES
            </h4>
            <p className="grey-text">
              Coding bootcamp for High school students, colleges, and university
              students. Runs for 4 weeks. Get internship placements, and job
              opportunities.
            </p>
            <MDBBtn color="primary" size="sm" href="/colleges">
              <MDBIcon far icon="clone" className="left" /> APPLY NOW !
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default Summer

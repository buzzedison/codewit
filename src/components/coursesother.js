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

import SCHOOL from "../images/sch.jpg"

const CoursesOther = () => {
  return (
    <section className="my-5" style={{ padding: "70px" }}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Take our courses for free now and pay later
      </h2>
      <p className="grey-text w-responsive text-center mx-auto mb-5">
        You can take our courses for free and pay later when you are hired.
        <p>
          {" "}
          We train, incubate and provide part-time or full-time employment.
        </p>
        <p> Our goal is to raise 50,000 developers in Africa by 2030!</p>
      </p>

      <MDBRow>
        <MDBCol lg="5" className="mb-lg-0 mb-5">
          <img src={SCHOOL} alt="" className="img-fluid rounded z-depth-1" />
        </MDBCol>
        <MDBCol lg="7" style={{ padding: "20px" }}>
          <MDBRow className="mb-3">
            <MDBCol md="1" size="2" />
            <MDBCol md="11" size="10">
              <h5 className="font-weight-bold mb-3">
                Live Classes from anywhere
              </h5>
              <p className="grey-text" style={{ paddingLeft: "20px" }}>
                You can take our courses from the comfort of your home or office
                or at our centres in Accra, Kumasi and Takoradi. You learn at
                your own pace. Join our online community and take your career to
                the next level.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol md="1" size="2" />
            <MDBCol md="11" size="10">
              <h5 className="font-weight-bold mb-3">
                Get hired after graduating
              </h5>
              <p className="grey-text">
                We will match you with top employers constantly looking to hire
                from us.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol md="1" size="2" />
            <MDBCol md="11" size="10">
              <h5 className="font-weight-bold mb-3">Work on real projects</h5>
              <p className="grey-text">
                You get to work on real projects and solve real community
                projects with the knowledge acquired.
              </p>
              <MDBBtn color="primary">APPLY NOW!</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default CoursesOther

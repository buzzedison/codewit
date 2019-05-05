import React from "react"
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact"

import ABOUTIMAGE from "../images/about.jpg"

const Aboutintro = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCardImage className="img-fluid" src={ABOUTIMAGE} />
        </MDBCol>

        <MDBCol md="6">
          <MDBCardTitle className="h4" style={{ padding: "30px" }}>
            Codewit is a social enterprise that trains developers and empowers
            them to create sustainable solutions to problems that benefit their
            society and country at large.
          </MDBCardTitle>
          <MDBCardText style={{ paddingRight: "30px", paddingLeft: "30px" }}>
            We train, incubate and provide part-time or full-time employment.
            <p>
              We have a team of skilled developers, angel investors and
              impact-driven people from different countries.{" "}
              <p>
                {" "}
                We offer online training for people who want to change careers,
                and onsite full time/part time training in multiple locations.
              </p>
            </p>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Aboutintro

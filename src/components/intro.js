import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBJumbotron,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCardText,
  MDBIcon,
} from "mdbreact"
import "./layout.css"
import JALEELA from "../images/jaleela.png"
const Intro = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBView hover rounded>
            <img
              src={JALEELA}
              className="img-fluid"
              alt=""
              className="mainImage"
            />
          </MDBView>
        </MDBCol>
        <MDBCol md="6">
          {" "}
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="h2">
                We train developers, software engineers, and tech entrepreneurs
              </MDBCardTitle>
              <p className="blue-text my-4 font-weight-bold">
                Online at the comfort of your home or at any of our centres
              </p>
              <MDBCardText>
                You can take our courses for free and pay later when you are
                hired. We train, incubate and provide part-time or full-time
                employment. Our goal is to raise 50,000 developers in Africa by
                2030!
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <MDBBtn color="primary" className="waves-effect" href="/apply">
                  APPLY NOW <MDBIcon far icon="gem" />
                </MDBBtn>
                <MDBBtn color="dark" className="waves-effect">
                  FIND OUT MORE <MDBIcon icon="download" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Intro

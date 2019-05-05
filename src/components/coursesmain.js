import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBCard,
  MDBCardTitle,
} from "mdbreact"
import FULLSTACK from "../images/fullstack2.jpg"
import JAM from "../images/jam.jpg"
import UI from "../images/ui.png"

const MainCourses = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md={4}>
          {" "}
          <MDBCard style={{ width: "20rem", marginLeft: "20px" }}>
            <MDBCardImage className="img-fluid" src={FULLSTACK} waves />
            <MDBCardBody>
              <MDBCardTitle>Full Stack Web development</MDBCardTitle>
              <MDBCardText>
                HTML, CSS, JavaScript, React Js, React Native, MongoDB, Node Js,
                Git, Django, Python, GraphQL, MySQL.
              </MDBCardText>
              <MDBBtn href="#">Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard style={{ width: "20rem", marginLeft: "20px" }}>
            <MDBCardImage className="img-fluid" src={JAM} waves />
            <MDBCardBody>
              <MDBCardTitle>JavaScript & JAMSTACK </MDBCardTitle>
              <MDBCardText>
                Vanila JavaScript, Node JS, Next, Express, GraphQL, MongoDB,
                Gatsby, React, Vue
              </MDBCardText>
              <MDBBtn href="#">Learn more</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard style={{ width: "20rem", marginLeft: "20px" }}>
            <MDBCardImage className="img-fluid" src={UI} waves />
            <MDBCardBody>
              <MDBCardTitle>UI & UX DESIGNS</MDBCardTitle>
              <MDBCardText>
                Design thinking, UI Design patterns, HTML, CSS, JavaScript,
                React, Wireframe. Design Better User Interfaces.
              </MDBCardText>
              <MDBBtn href="#">Learn more</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default MainCourses

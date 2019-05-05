import React from "react"
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBInput,
  MDBBtn,
} from "mdbreact"

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <ul className="footerList">
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Courses</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Programs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Insight</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="6" dark-text>
            <form>
              <div style={{ color: "white" }}>
                <MDBInput
                  className="footform"
                  label="Type your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  style={{ color: "white" }}
                />
                <MDBBtn color="dark">Subsribe</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.bloopglobal.com"> BLOOP</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer

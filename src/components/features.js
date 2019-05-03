import React from "react"
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact"

const Features = () => {
  return (
    <section className="sectiona" fluid>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Learn to Code for Free?
      </h2>
      <p className="lead white-text w-responsive text-center mx-auto mb-5">
        You can take our courses for free at the beginning at{" "}
        <b>no upfront cost to you</b>, and you only start to pay when you get
        hired. We have a place for you here.
      </p>

      <MDBRow>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2" />
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold white-text">
                Learn Online Anytime
              </h4>
              <p className="sectiontext" w-responsive>
                Take our online courses at your convenience. Specially designed
                for busy people.
              </p>
              <MDBBtn color="dark" size="sm">
                BROWSE COURSES
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2" />
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold white-text">Offline locations</h4>
              <p className="sectiontext">
                Come to our physical locations in Accra, Kumasi and Takoradi.
                Classes run on weekdays and weekends. Flexibility to choose what
                works for you.
              </p>
              <MDBBtn color="dark" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="3" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2" />
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold white-text">Guaranteed Jobs</h4>
              <p className="sectiontext">
                We have a job waiting for you, if you go through our program in
                flying colours. All you have to do is be good at school, and
                leave the rest to us
              </p>
              <MDBBtn color="dark" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default Features

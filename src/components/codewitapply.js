import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact"

const CodewitApply = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form
            name="codewit school registration"
            method="POST"
            data-netlify="true"
          >
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Why do you want to attend Codewit Code School?
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                APPLY NOW
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default CodewitApply

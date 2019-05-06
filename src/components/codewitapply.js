import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact"
import NetlifyForm from "react-netlify-form"

class CodewitApply extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <NetlifyForm
                name="Codewit registration"
                onSubmit={this.handleSubmit}
              >
                {({ loading, error, success }) => (
                  <div>
                    {loading && <div>Loading...</div>}
                    {error && (
                      <div>
                        Your information was not sent. Please try again later.
                      </div>
                    )}
                    {success && (
                      <div>
                        <h2>Thank you for applying to Codewit Code School!</h2>
                      </div>
                    )}
                    {!loading && !success && (
                      <div>
                        <input
                          type="hidden"
                          name="contact"
                          value="contact"
                          className="form-control"
                        />
                        <p className="h4 text-center mb-4">Sign up</p>
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          Your name
                        </label>
                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <label
                          htmlFor="defaultFormRegisterEmailEx"
                          className="grey-text"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          id="defaultFormRegisterEmailEx"
                          className="form-control"
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <label
                          htmlFor="defaultFormRegisterConfirmEx"
                          className="grey-text"
                        >
                          Confirm your email
                        </label>
                        <input
                          type="email"
                          id="defaultFormRegisterConfirmEx"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="phonenumber" className="grey-text">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="phonenumber"
                          className="form-control"
                          onChange={this.handleChange}
                          required
                        />
                        <br />

                        <label
                          htmlFor="defaultFormContactMessageEx"
                          className="grey-text"
                        >
                          Why do you want to attend Codewit Code School?
                        </label>
                        <textarea
                          type="text"
                          id="defaultFormContactMessageEx"
                          className="form-control"
                          rows="3"
                          onChange={this.handleChange}
                          required
                        />
                        <div className="text-center mt-4">
                          <MDBBtn color="unique" type="submit">
                            APPLY NOW
                          </MDBBtn>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </NetlifyForm>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default CodewitApply

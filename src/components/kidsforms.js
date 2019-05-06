import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact"
import NetlifyForm from "react-netlify-form"
import KIDSFORM from "../images/kids.jpg"

class KidsSummerForms extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" style={{ paddingRight: "20px" }}>
              <NetlifyForm name="Kids Summer Form" onSubmit={this.handleSubmit}>
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
                        <h4>
                          Thank you for applying for our Kids Summer Program!
                        </h4>
                      </div>
                    )}
                    {!loading && !success && (
                      <div>
                        <p className="h4 text-center mb-4">Sign up</p>
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          name="name"
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <label
                          htmlFor="defaultFormRegisterEmailEx"
                          className="grey-text"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="defaultFormRegisterEmailEx"
                          className="form-control"
                          name="email"
                          onChange={this.handleChange}
                          required
                        />
                        <br />

                        <label htmlFor="phonenumber" className="grey-text">
                          Contact Number
                        </label>
                        <input
                          type="number"
                          id="phonenumber"
                          className="form-control"
                          name="phonenumber"
                          onChange={this.handleChange}
                          required
                        />
                        <br />

                        <label
                          htmlFor="defaultFormContactMessageEx"
                          className="grey-text"
                        >
                          Why do you want to attend Coding for Kids Program?
                        </label>
                        <textarea
                          type="text"
                          id="defaultFormContactMessageEx"
                          className="form-control"
                          name="message"
                          rows="3"
                          onChange={this.handleChange}
                          required
                        />
                        <br />
                        <div>
                          <select
                            className="browser-default custom-select"
                            onChange={this.handleChange}
                          >
                            <option>When can you attend?</option>
                            <option value="1">June, 2019</option>
                            <option value="2">July, 2019</option>
                          </select>
                        </div>
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
            <MDBCol md="6" style={{ paddingTop: "55px", paddingleft: "45px" }}>
              <img src={KIDSFORM} alt="kids" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default KidsSummerForms

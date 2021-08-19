import React from 'react'
// import Footer from './Footer'
import "./SignUp.css"
const SignUp = () => {
    return (
      <>
        <div className="mandatory">
          <span>*</span>indicates a required field.
        </div>
        <div className="field">
          <div className="field-wrapper">
            <div>
              <label htmlFor="firstName">
                FIRST NAME<span>*</span>
              </label>
              <br />
              <input type="" placeholder="" />
              <br />
            </div>
            <div>
              <label htmlFor="lastName">
                LAST NAME<span>*</span>
              </label>
              <br />
              <input type="lastName" placeholder="" />

              <br />
            </div>
            <div>
              <label htmlFor="phone">
                PHONE<span>*</span>
              </label>
              <br />
              <input type="phone" placeholder="" />
              <br />
            </div>
            <div>
              <label htmlFor="mobilePhone">
                MOBILE <span>*</span>
              </label>
              <br />
              <input type="mobilePhone" placeholder="" />
              <br />
            </div>
            <div>
              <label htmlFor="email">
                EMAIL<span>*</span>
              </label>
              <br />
              <input type="email" placeholder="" />
            </div>
          </div>
        </div>
        <div>
          <hr className="line"/>
          <div className="field">
            <div className="field-wrapper">
              <div>
                <label htmlFor="companyName">
                  COMPANY NAME<span>*</span>
                </label>
                <br />
                <input type="companyName" placeholder="" />
                <br />
              </div>
              <div>
                <label htmlFor="companyWebsite">
                  COMPANY WEBSITE<span>*</span>
                </label>
                <br />
                <input type="companyWebsite" placeholder="" />

                <br />
              </div>
              <div>
                <label htmlFor="companyAddress">
                  COMPANY ADDRESS<span>*</span>
                </label>
                <br />
                <input type="companyAddress" placeholder="" />
                <br />
              </div>
              <div>
                <label htmlFor="address2">
                  ADDRESS2<span>*</span>
                </label>
                <br />
                <input type="address2" placeholder="" />
                <br />
              </div>
              <div>
                <label htmlFor="city">
                  CITY<span>*</span>
                </label>
                <br />
                <input type="city" placeholder="" />
              </div>
              <div>
                <label htmlFor="state">
                  STATE<span>*</span>
                </label>
                <br />
                <input type="state" placeholder="" />
              </div>
            </div>
          </div>
            </div>
            {/* <Footer/> */}
      </>
    );
}

export default SignUp;

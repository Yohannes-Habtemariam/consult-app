import React from "react";
import "./CourseRegistration.scss";

const CourseRegistration = () => {
  return (
    <main className="course-registration-page">
      <h1 className="course-registration-title">Welcome to LisaConsult</h1>
      <fieldset className="course-registration-fieldset">
        <legend className="course-registration-legend"> Course Registration Form{" "}
        </legend>
        <form className="course-registration-form">
          <div className="course-registration-contact-detail">
            <h2>Contact Details</h2>
            <div>
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div>
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div>
              <input type="date" name="date" placeholder="Age" />
            </div>

            <div>
              <select name="gender" id="">
                <option value="defaul">Select Gender</option>
                <option value="famale">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" />
            </div>

            <div>
              <input
                type="tel"
                name="telephone"
                placeholder="(Country Code) Phone Number"
              />
            </div>

            <div>
              <input type="text" name="profession" placeholder="Profession" />
            </div>
            <div>
              <select name="language" id="">
                <option value="default">Select Language</option>
                <option value="english">English</option>
                <option value="deutch">Deutsch</option>
                <option value="tigrigna">Tigrigna</option>
                <option value="amharic">Amharic</option>
              </select>
            </div>
          </div>

          <div className="course-registration-residence-address-course">
            <div className="course-registration-residence-address">
              <h2>Residence Address</h2>
              <div>
                <input type="text" name="street" placeholder="Street Address" />
              </div>

              <div>
                <input type="number" placeholder="Postal/Zip Code" />
              </div>

              <div>
                <input type="text" name="city" placeholder="City" />
              </div>

              <div>
                <input type="text" name="state" placeholder="State" />
              </div>
              <div>
                <input type="text" name="country" placeholder="Country" />
              </div>
            </div>

            <div className="course-registration-courses">
              <h2 className="course-registration-courses-title">Courses</h2>
              <div>
                <select name="course" id="">
                  <option value="default">Select Course</option>
                  <option value="website">Web Development</option>
                  <option value="investment">Investment</option>
                  <option value="onlineMarketing">Online Marketing</option>
                  <option value="leadership"> Leadership </option>
                </select>
              </div>
              <div>
                <input type="text" name="start" placeholder="Starting Time" />
              </div>
            </div>
          </div>

          <div className="course-registration-consent-and-reset">
            <div className="course-registration-consent">
              <input className="checkbox-consent" type="checkbox" name="consent" />
              <span>I accept <span>Terms of Use</span></span>
              <input type="reset" className="reset" />
            </div>
          </div>

          <button className="course-registration-submit-btn">Submit</button>
          
        </form>
      </fieldset>
    </main>
  );
};

export default CourseRegistration;

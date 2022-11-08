import React, { useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./Register.scss";

const Register = () => {
  // to navigate register page
  const navigate = useNavigate();

  // Register state variables
  const { setUser, token } = useContext(myContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [agreeChanged, setAgreeChanged] = useState(false);

  // useRef() Hook for the agreement checkbox
  const agreeError = useRef();

  // Function that is used to update the state variables of the registration form
  const update = (event) => {
    switch(event.target.name) {
      case "firstName": 
        setFirstName(event.target.value);
        break;
      case "lastName": 
        setLastName(event.target.value);
        break;
      case "email":
          setEmail(event.target.value);
        break; 
      case "confirmEmail":
        setConfirmEmail(event.target.value);
        break; 
      case "password": 
        setPassword(event.target.value);
        break;
      case "showPassword":
        setShowPassword(false);
        break; 
      case "confirmPassword":
        setConfirmPassword(event.target.value);
        break; 
      case "showConfirmPassword":
        setShowConfirmPassword(false);
        break; 
      case "agree":
        setAgree(!agree);
        setAgreeChanged(true);
        break;
      default:
        break;
    }
  };

  // Function that display and hide the password
  const passwordDisplayController = () => {
    setShowPassword(prevState => !prevState)
  }

  // Function that handles consent of the user
  const checkboxAgree = () => {
    setAgreeChanged(prevAgree => !prevAgree)
  }

   // Function that display and hide the password
   const confirmPasswordDisplayController = () => {
    setShowConfirmPassword(prevState => !prevState)
  }

  // Function to reset all the state variables
  const resetAllEnteredData = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setConfirmEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgree(false);
    setAgreeChanged(false)
  };

  // Function to register the user
  const SubmitRegisteredUser = async (event) => {
    event.preventDefault();

      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        confirmEmail: confirmEmail,
        password: password,
        confirmPassword: confirmPassword
      }
  
      const settings = {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        },
      };
  
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/register", settings);
  
      const result = await response.json();
  
      try{
        if(response.ok) {
          setUser(result.id);
          resetAllEnteredData();
          navigate("/login");
        } else {
          throw new Error(result.message);
        }
      }catch(err){
        console.loge(err.message);
      }
  };

  return (
    <main className="register-page">
      <div className="register-form-container">
        <fieldset className="register-field">
          <legend className="register-legend"> Register </legend>
          <form action="" onSubmit={SubmitRegisteredUser} className="register-form">
            <div className="register-input-fields-container">
              <div className="register-first-name">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={update}
                  placeholder="First Name"
                />
              </div>

              <div className="register-last-name">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={update}
                  placeholder="Last Name"
                />
              </div>

              <div className="register-email">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={update}
                  placeholder="Email"
                />
              </div>

              <div className="register-confirmEmail">
                <input
                  type="email"
                  name="confirmEmail"
                  value={confirmEmail}
                  onChange={update}
                  placeholder="Confirm Email"
                />
              </div>

              <div className="register-password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={update}
                  placeholder="Password"
                />
                <span onClick={passwordDisplayController} className="password-display"> {showPassword ? <AiFillEyeInvisible/> : <AiFillEye/> } </span>
              </div>

              <div className="register-confirm-password">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={update}
                  placeholder="Confirm Password"
                />
                <span onClick={confirmPasswordDisplayController} className="password-display"> {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye /> } </span>
              </div>
            </div>
            <div className="register-consent">
              <input
                type="checkbox"
                name="agree"
                onChange={update}
                className="register-consent-input"
              />
              <span>I accept</span>
              <NavLink> Terms of Use</NavLink>
              
            </div>
            <button className="register-button"> Register Now </button>
            <p className="haveAccount">Already have an account? <NavLink> Log In </NavLink></p>
          </form>
        </fieldset>
      </div>
    </main>
  );
};

export default Register;

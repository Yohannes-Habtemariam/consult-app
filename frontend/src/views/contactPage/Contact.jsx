import React, { useState, useRef } from "react";
import { ContactData } from "../../data/Data";
import "./Contact.scss";

const Contact = () => {
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  // Validation of the state variables
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [textareaValidation, setTextareaValidation] = useState(false);

  // useRef to store the email input
  const emailRef = useRef();

  // Function to check if the email is valid
  const checkEmailFormat = () => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    if (emailRegex) {
        emailRef.current.className = "errorInvisible"
          //emailRef.current.style.display = "none"
    } else {
          emailRegex.current.className = "errorVisible"
          //passwordRef.current.style.display = "block"
    }
  };

  // Function to update data
  const updateData = (event) => {
    switch (event.target.name) {
      case "fullName":
        setName(event.target.value);
        setNameValidation(true);
        break;
      case "email":
        setEmail(event.target.value);
        setEmailValidation(true);
        break;
      case "message":
        setTextarea(event.target.value);
        setTextareaValidation(true);
        break;
      default:
        break;
    }
  };
  return (
    <main className="contact-page">
      <h1 className="contact-page-title"> We'd Love to Hear From You </h1>
      <section className="contact-media">
        {ContactData.map(({ image, heading, link }) => {
          return (
            <article className="contact-media-items">
              <figure className="contact-meida-icon-container"> {image}</figure>
              <h3 className="contact-media-header"> {heading} </h3>
              <p className="contact-media-link-to"> {link} </p>
            </article>
          );
        })}
      </section>

      <section className="contact-page-form">
        <h2 className="contact-page-form-title">Contact Us</h2>
        <form action="" className="contact-form">
          <div className="contact-form-input-container">
            <input
              type="text"
              name="fullName"
              value={name}
              onChange={updateData}
              placeholder="Enter Full Name"
            />
            <div className={nameValidation && name.trim().length === 0 ? "errorVisible" : "errorInvisible"}>Please enter your name</div>
          </div>

          <div className="contact-form-input-container">
            <input
              type="email"
              name="email"
              value={email}
              onChange={updateData}
              onBlur={checkEmailFormat}
              placeholder="Enter Valid Email"
            />
            <div className={emailValidation && email.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Email is required </div>
            <div className="errorInvisible" ref={emailRef}> Incorrect email format! </div>
          </div>

          <div className="contact-form-input-container">
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={textarea}
              onChange={updateData}
              placeholder="We Value Your Message"
            ></textarea>
            <div className={textareaValidation && textarea.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please write us message </div>
          </div>
          <div className="contact-form-button-container">
            <button className="contact-form-btn">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;

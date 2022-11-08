import React from "react";
import { MdLocationPin, MdEmail, MdOutlineSupport } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import "./Contact.scss";

const Contact = () => {
  return (
    <main className="contact-page">
      <h1 className="contact-page-title"> We'd Love to Hear From You </h1>
      <section className="contact-media">
        <article className="contact-media-items">
          <figure className="contact-meida-icon-container">
            <MdLocationPin className="contact-meida-icon" />
          </figure>
          <h3 className="contact-media-header">Our Manin Office</h3>
          <p className="contact-media-link-to">
            <a href="tele">straße 31, 4657 Hamburg, Germany</a>
          </p>
        </article>

        <article className="contact-media-items">
          <figure className="contact-meida-icon-container">
            <FiPhoneCall className="contact-meida-icon" />
          </figure>
          <h3 className="contact-media-header">Phone Number</h3>
          <p className="contact-media-link-to">
            <a href="tele"> +491768686868</a>
          </p>
        </article>

        <article className="contact-media-items">
          <figure className="contact-meida-icon-container">
            <MdEmail className="contact-meida-icon" />
          </figure>
          <h3 className="contact-media-header">Email Address</h3>
          <p className="contact-media-link-to">
            <a href="maoilto"> uelandrae@gmail.com </a>
          </p>
        </article>

        <article className="contact-media-items">
          <figure className="contact-meida-icon-container">
            <MdOutlineSupport className="contact-meida-icon" />
          </figure>
          <h3 className="contact-media-header">24/7 Support</h3>
          <p className="contact-media-link-to">
            <a href="telTo"> Call us now </a>
          </p>
        </article>
      </section>
      <section className="contact-page-form">
        <h2 className="contact-page-form-title">Contact Us</h2>
        <form action="" className="contact-form">
          <div className="contact-form-input-container">
            <input type="text" name="fullName" placeholder="Enter Your Full Name" />
          </div>

          <div className="contact-form-input-container">
            <input type="email" name="email" placeholder="Enter Your Valid Email Address" />
          </div>

          <div className="contact-form-input-container">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write Your Constructive Text Message"
            ></textarea>
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

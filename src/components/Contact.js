import React from 'react';

const Contact = (props) => {
  return(
    <section id="contact" className="main-content contact-wrapper">
      <div className="form-wrapper">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Enter Email" />
          <textarea type="text" name="message" placeholder="Your Message" />
          <button type="submit" className="button form-button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
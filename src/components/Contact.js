import React, { useState } from 'react';

const Contact = (props) => {

  // Sets state for controlled inputs
  const [ inputValue, setInputValue ] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handles value change in input fields
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({
      [name]: value
    });
  }

  return(
    <section id="contact" className="main-content contact-wrapper">
    <h2 className="contact-title">Contact</h2>
      <div className="form-wrapper">
        <form className="contact-form">
          <input onChange={handleChange} defaultValue={inputValue.name} type="text" name="name" placeholder="Name" />
          <input onChange={handleChange} defaultValue={inputValue.email} type="email" name="email" placeholder="Enter Email" />
          <textarea onChange={handleChange} defaultValue={inputValue.message} type="text" name="message" placeholder="Your Message" />
          <button type="submit" className="button form-button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
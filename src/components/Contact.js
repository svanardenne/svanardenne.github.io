import React, { Component } from 'react';

class Contact extends Component {

  // Sets state for controlled inputs
  state={
    name: "",
    email: "",
    message: "",
  }

  // Handles value change in input fields
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    return(
      <section id="contact" className="main-content contact-wrapper">
      <h2 className="contact-title">Contact</h2>
        <div className="form-wrapper">
          <form className="contact-form">
            <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Name" />
            <input onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Enter Email" />
            <textarea onChange={this.handleChange} value={this.state.message} type="text" name="message" placeholder="Your Message" />
            <button type="submit" className="button form-button">Submit</button>
          </form>
        </div>
      </section>
    );
  }
  
}

export default Contact;
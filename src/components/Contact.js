import React, { Component } from 'react';
import axios from 'axios';

// Import API configuration
import apiURL from '../mailAPIconfig';

class Contact extends Component {

  // Sets state for controlled inputs
  state= {
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

  // Handles the submission of form data to mail API
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiURL, this.state).then((res) => {
      if (res.data.status === 'success') {
        alert("Message Sent.");
        this.setState({name: '', email: '', subject: '', message: ''});
      } else if (res.data.status === 'fail') {
        alert("Message failed to send.");
      }
    });
  }

  render() {
    return(
      <section id="contact" className="main-content contact-wrapper">
      <h2 className="contact-title">Contact</h2>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} className="contact-form">
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
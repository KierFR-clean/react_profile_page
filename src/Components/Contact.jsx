import React, { useState } from 'react';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/App.css'; // We'll create this CSS file for custom styles

const SubmissionSuccess = ({ formData }) => (
  <div className="text-center success-message p-4 bg-light rounded">
    <h2 className="mb-4">Thank you! Your message has been sent.</h2>
    <p className="mb-4">I'll reach you within minutes! Wait shortly!.</p>
    <h3 className="mb-4 fw-bold text-body-emphasis ">Message Details</h3>
    <p><strong>Name:</strong> {formData.user_name}</p>
    <p><strong>Email:</strong> {formData.user_email}</p>
    <p><strong>Message:</strong> {formData.message}</p>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    swal("Success!", "Your message has been sent successfully!", "success");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="contact-container d-flex align-items-center justify-content-center">
        <SubmissionSuccess formData={formData} />
      </div>
    );
  }

  return (
    <div className="contact-container d-flex align-items-center justify-content-center">
      <div className="contact-form-wrapper">
        <h1 id="contact" className="text-center display-6 fw-bold text-body-emphasis mb-4">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              name="user_name"
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Your Name"
              required
              value={formData.user_name}
              onChange={handleChange}
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="user_email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              value={formData.user_email}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              name="message"
              className="form-control"
              id="floatingMessage"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              style={{ height: '150px' }}
            ></textarea>
            <label htmlFor="floatingMessage">Message</label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-outline-dark btn-lg px-4">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
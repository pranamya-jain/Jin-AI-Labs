import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-page">
      <div className="container">
        <div className="page-header">
          <h2 className="section-title">Ready to Upgrade?</h2>
          <p className="section-subtitle">
            Dive into the future with Jin-AI Labs. Get in touch and build out a smarter, more automated org.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              Ready to transform your business with AI? We're here to help you build something amazing.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Location</h4>
                <p>Bangalore, India</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p>hello@jin-ai-labs.com</p>
              </div>
              <div className="contact-item">
                <h4>Founded</h4>
                <p>Tinkering since 2025</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                name="name"
                className="form-input" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email"
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Company</label>
              <input 
                type="text" 
                name="company"
                className="form-input" 
                value={formData.company}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Project Description</label>
              <textarea 
                name="message"
                className="form-textarea" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
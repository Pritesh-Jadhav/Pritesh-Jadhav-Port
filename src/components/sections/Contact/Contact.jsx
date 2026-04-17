import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">
        <h2 className="reveal">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="contact-container reveal">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="contact-details">
              <div className="contact-item glass-panel">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:your.email@example.com">priteshjadhav400@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item glass-panel">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+910000000000">+91 8446056960</a>
                </div>
              </div>
              
              <div className="contact-item glass-panel">
                <div className="contact-icon">🔗</div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="www.linkedin.com/in/pritesh-jadhav-34877736a" target="_blank" rel="noreferrer">pritesh-jadhav</a>
                </div>
              </div>

              <div className="contact-item glass-panel">
                <div className="contact-icon">💻</div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Pritesh-Jadhav" target="_blank" rel="noreferrer">github.com/pritesh</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container glass-panel">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

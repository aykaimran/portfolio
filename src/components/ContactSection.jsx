import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.target);

    try {
      // Send data to FormSubmit
      await fetch('https://formsubmit.co/ajax/aykaimran28@gmail.com', {
        method: 'POST',
        body: formData,
      });

      setSubmitted(true); // Show thank you message
      e.target.reset();   // Optional: reset form
    } catch (error) {
      alert('Oops! Something went wrong.');
      console.error(error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2>GET IN TOUCH</h2>
        <div className="section-underline"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>I'm always open to discussing new opportunities and creative projects.</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>aykaimran28@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          <div className="hero-socials">
            {[
              { icon: <FaGithub />, href: "https://github.com/aykaimran", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ayka-imran", label: "LinkedIn" },
              { icon: <FaEnvelope />, href: "mailto:aykaimran28@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label={social.label}
                style={{ animation: `floatSocialIcon 3s ease-in-out infinite ${index * 0.2}s` }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>

          <button type="submit" className="submit-btn">Send Message</button>

          {submitted && (
            <p style={{ color: 'green', marginTop: '10px' }}>
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;

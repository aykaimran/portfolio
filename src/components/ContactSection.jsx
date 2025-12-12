import React from 'react';

function ContactSection() {
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
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
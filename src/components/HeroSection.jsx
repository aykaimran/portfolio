import React from 'react';
// 1. Import the icons you need
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function HeroSection() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-greeting">Bonjour !!</span>
                        <span className="hero-name">I am Ayka Imran</span>
                    </h1>
                    <div className="fullstack-badge">
                        <h2>Full Stack Developer & Software Engineer</h2>
                    </div>
                    <p className="hero-description">
                        Specializing in MERN Stack, Java, and NLP solutions. 
                        I build scalable web applications and intelligent systems using React, Node.js, Python, and BERT models.
                    </p>
                    
                    {/* 2. Updated Social Links with Icons */}
                    <div className="hero-socials">
                        <a 
                            href="https://github.com/aykaimran" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-icon"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/ayka-imran" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-icon"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        
                        <a 
                            href="mailto:aykaimran28@gmail.com" 
                            className="social-icon"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
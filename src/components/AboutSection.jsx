import React from 'react';
import myProfileImage from '../assets/me.jpg';

function AboutSection() {
    // Tech stack from CV
    const techStack = ['React', 'Node.js', 'Python', 'Java', 'C/C++', 'PostgreSQL','MongoDB', 'NLP', 'Spring Boot', 'JUnit', 'MERN Stack', 'Java Swing', '.NET', 'Flask','Git'];

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="profile-image-container">
                    <div className="profile-image-wrapper">
                        <div className="profile-image">
                            <img src={myProfileImage} alt="Ayka Imran Profile" className="actual-profile-img" />
                            <div className="profile-glow"></div>
                        </div>
                        <div className="profile-tech-stack">
                            {techStack.map((tech, index) => (
                                <div key={index} className="tech-bubble" style={{ animationDelay: `${index * 0.2}s` }}>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <div className="section-header">
                        <h2>ABOUT ME</h2>
                        <div className="section-underline"></div>
                    </div>
                    
                    <div className="about-text">
                        <p>
                            I am a Software Engineering student at <strong>FAST-NUCES </strong> 
                            and a passionate Full-Stack Developer. I specialize in building modern web applications 
                            and integrating AI/NLP models into practical solutions.
                        </p>
                        <p>
                            With a strong foundation in algorithmic problem solving and enterprise development, 
                            I combine creativity with robust backend logic using tools like MERN Stack, Java Swing, and Python.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="experience-cards">
                        <div className="exp-card">
                            <div className="exp-icon">🏆</div>
                            <h3>Gold Medalist</h3>
                            <p>Dept. Topper (2025)</p>
                        </div>
                        <div className="exp-card">
                            <div className="exp-icon">🚀</div>
                            <h3>Projects</h3>
                            <p>7+ Major Systems Built</p>
                        </div>
                        <div className="exp-card">
                            <div className="exp-icon">🎓</div>
                            <h3>GPA</h3>
                            <p>3.67 / 4.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
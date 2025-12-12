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
                            I am a Software Engineering student at <strong>FAST-NUCES</strong> 
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

                    {/* Detailed Info Grid
                    <div className="details-grid">
                        <div className="detail-column">
                            <h3>🎓 Education</h3>
                            <ul className="detail-list">
                                <li>
                                    <strong>BS Software Engineering</strong> <br/> 
                                    FAST-NUCES (2023-Present)
                                </li>
                                <li>
                                    <strong>A Levels (Computer Science)</strong> <br/> 
                                    KIMS (92%)
                                </li>
                            </ul>
                        </div>

                        <div className="detail-column">
                            <h3>💼 Experience</h3>
                            <ul className="detail-list">
                                <li>
                                    <strong>MERN Intern</strong> @ Code5 Technologies <br/>
                                    <small>Built AI Resume Builder & Admin Dashboards</small>
                                </li>
                                <li>
                                    <strong>Instructor</strong> @ Polymath Kids <br/>
                                    <small>Teaching C++ & Web Dev</small>
                                </li>
                                <li>
                                    <strong>Lab Demonstrator/TA</strong> @ FAST-NUCES
                                </li>
                            </ul>
                        </div>

                        <div className="detail-column">
                            <h3>🌟 Achievements</h3>
                            <ul className="detail-list">
                                <li>First Position (Gold Medal) in SE Dept</li>
                                <li>Merit Scholarship Holder (2019-2023)</li>
                                <li>Dean's Honor List (Spring 24, Fall 25)</li>
                                <li>CodeBees Competitive Programming Cert</li>
                            </ul>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}

export default AboutSection;
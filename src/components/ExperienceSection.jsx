import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experienceData = [
    {
        id: 1,
        role: "MERN Stack Intern",
        company: "Code5 Technologies",
        date: "Jun 2025 – Jul 2025",
        description: "Spearheaded the development of backend REST APIs using Node.js/Express and built an AI-integrated Resume Builder using React and Python Flask."
    },
    {
        id: 2,
        role: "Instructor (CS)",
        company: "Polymath Kids",
        date: "Dec 2024 – Present",
        description: "Developing and delivering tailored courses in C++ programming and Web Development to students, focusing on fundamental concepts."
    },
    {
        id: 3,
        role: "Teaching Assistant",
        company: "FAST-NUCES",
        date: "Aug 2025 – Present",
        description: "Assisting students with Digital Logic Design and Assembly Language concepts, managing grading, and supporting laboratory tasks."
    }
];

function ExperienceSection() {
    return (
        <section className="about-section" id="experience">
            <div className="section-header">
                <h2>EXPERIENCE</h2>
                <div className="section-underline"></div>
            </div>
            <div className="cards-grid">
                {experienceData.map((exp) => (
                    <div key={exp.id} className="info-card">
                        {/* Header: Date and Icon */}
                        <div className="card-header-line">
                            <FaBriefcase className="card-icon" style={{ marginRight: '15px' }} />
                            <span className="card-date">{exp.date}</span>
                            
                        </div>
                        
                        {/* Title & Subtitle */}
                        <h3 className="card-title">{exp.role}</h3>
                        <h4 className="card-subtitle">{exp.company}</h4>
                        
                        {/* Description */}
                        <p className="card-desc">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;
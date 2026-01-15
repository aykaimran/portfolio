import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: "Resume Maker with AI",
        tech: "MERN Stack, Python, Ollama",
        excerpt: "Full-stack app to create/edit resumes with AI-powered content suggestions. Features PDF downloads and auth.",
        status: "2025",
        github: "https://github.com/aykaimran/ResumeBuilder"
    },
    {
        id: 2,
        title: "MedPredict (NLP)",
        tech: "Python, BERT Model",
        excerpt: "Analysis of patient reports to predict diseases and recommend medicines using the BERT base model.",
        status: "2025",
        github: "https://github.com/aykaimran/MedPredict"
    },
    {
        id: 3,
        title: "LogiSim Circuit Simulator",
        tech: "Java Swing, PostgreSQL",
        excerpt: "Desktop app for logic circuit simulation (AND, OR, NOT). Supports saving projects and truth table generation.",
        status: "Dec 2025",
        github: "https://github.com/aykaimran/LogiSim"
    },
    // { 
    //     id: 4, 
    //     title: "ClearWay", 
    //     tech: "React, Python", 
    //     excerpt: "Visualizes real-time smog levels on maps and suggests optimal routes based on air quality.",
    //     status: "In Progress",
    //     github: "#"
    // },
    {
        id: 4,
        title: "Rentinel",
        tech: "React, Spring Boot",
        excerpt: "Property management system for streamlining interactions, rent tracking, and lease management.",
        status: "2025",
        github: "https://github.com/aykaimran/Rentinel"
    },
    {
        id: 5,
        title: "PeakSaver",
        tech: "C++, .NET, SQL",
        excerpt: "Desktop application to track electricity usage and optimize scheduling for peak/off-peak hours.",
        status: "2024",
        github: "https://github.com/aykaimran/PeakSaver"
    }
];

function ProjectsSection() {
    return (
        <section className="about-section" id="projects">
            <div className="section-header">
                <h2>FEATURED PROJECTS</h2>
                <div className="section-underline"></div>
            </div>
            <div className="cards-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="info-card">
                        <div className="card-header-line">
                            <FaProjectDiagram className="card-icon" style={{ marginRight: '15px' }} />
                            <span className="card-date">{project.status}</span>
                        </div>
                       

                        <h3 className="article-title">{project.title}</h3>
                        <div className="tech-badge-container">
                            <small className="tech-badge">{project.tech}</small>
                        </div>
                        <p className="article-excerpt">
                            {project.excerpt}
                        </p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="read-more-btn"
                            onClick={(e) => {
                                if (project.github === "#") {
                                    e.preventDefault();
                                    alert("GitHub link coming soon!");
                                }
                            }}
                        >
                            View Project Code
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
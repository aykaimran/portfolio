import React from 'react';

// Real Data from CV
const projectsData = [
    { 
        id: 1, 
        title: "Resume Maker with AI", 
        tech: "MERN Stack, Python, Ollama", 
        excerpt: "Full-stack app to create/edit resumes with AI-powered content suggestions. Features PDF downloads and auth.",
        status: "2025"
    },
    { 
        id: 2, 
        title: "MediPredict (NLP)", 
        tech: "Python, BERT Model", 
        excerpt: "Analysis of patient reports to predict diseases and recommend medicines using the BERT base model.",
        status: "2025"
    },
    { 
        id: 3, 
        title: "LogiSim Circuit Simulator", 
        tech: "Java Swing, PostgreSQL", 
        excerpt: "Desktop app for logic circuit simulation (AND, OR, NOT). Supports saving projects and truth table generation.",
        status: "Dec 2025"
    },
    { 
        id: 4, 
        title: "Smog-Aware Navigation", 
        tech: "React, Python", 
        excerpt: "Visualizes real-time smog levels on maps and suggests optimal routes based on air quality.",
        status: "In Progress"
    },
    { 
        id: 5, 
        title: "Tenant-Landlord System", 
        tech: "React, Spring Boot", 
        excerpt: "Property management system for streamlining interactions, rent tracking, and lease management.",
        status: "2025"
    },
    { 
        id: 6, 
        title: "Energy Consumption Planner", 
        tech: "C++, .NET, SQL", 
        excerpt: "Desktop application to track electricity usage and optimize scheduling for peak/off-peak hours.",
        status: "2024"
    }
];

function ProjectsSection() {
    return (
        <section className="about-section" id="projects">
            <div className="section-header">
                <h2>FEATURED PROJECTS</h2>
                <div className="section-underline"></div>
            </div>
            <div className="articles-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="article-card">
                        <div className="article-date">{project.status}</div>
                        <h3 className="article-title">{project.title}</h3>
                        <div className="tech-badge-container">
                            <small className="tech-badge">{project.tech}</small>
                        </div>
                        <p className="article-excerpt">
                            {project.excerpt}
                        </p>
                        <button className="read-more-btn">View Details →</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
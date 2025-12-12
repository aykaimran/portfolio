import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        degree: "BS Software Engineering",
        institution: "FAST-NUCES, Lahore",
        date: "Aug 2023 - Present",
        details: "GPA: 3.67/4.00",
        badge: "Department Topper"
    },
    {
        id: 2,
        degree: "A Levels (Comp Sci)",
        institution: "KIMS",
        date: "2021 - 2023",
        details: "1012/1100 marks (92%)",
        badge: "High Achiever"
    },
    {
        id: 3,
        degree: "O Levels (Science)",
        institution: "KIMS",
        date: "2019 - 2021",
        details: "832/900 marks (92.44%)",
        badge: "Scholarship"
    }
];

function EducationSection() {
    return (
        <section className="about-section" id="education">
            <div className="section-header">
                <h2>EDUCATION</h2>
                <div className="section-underline"></div>
            </div>
            <div className="cards-grid">
                {educationData.map((edu) => (
                    <div key={edu.id} className="info-card">
                        <div className="card-header-line">
                            <FaGraduationCap className="card-icon" style={{ marginRight: '15px' }} />

                            <span className="card-date">{edu.date}</span>
                        </div>

                        <h3 className="card-title">{edu.degree}</h3>
                        <h4 className="card-subtitle">{edu.institution}</h4>
                        <p className="card-desc">{edu.details}</p>

                        {/* Gold Badge for achievements */}
                        {edu.badge && <span className="card-badge">{edu.badge}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationSection;
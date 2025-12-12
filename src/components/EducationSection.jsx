import React from 'react';

const educationData = [
    {
        id: 1,
        degree: "BS Software Engineering",
        institution: "FAST-NUCES, Lahore",
        date: "Aug 2023 - Present",
        details: "GPA: 3.67/4.00",
        highlight: "Department Topper"
    },
    {
        id: 2,
        degree: "A Levels (Computer Science)",
        institution: "KIMS",
        date: "2021 - 2023",
        details: "1012/1100 marks (92%)",
        highlight: "High Achiever"
    },
    {
        id: 3,
        degree: "O Levels (Science Group)",
        institution: "KIMS",
        date: "2019 - 2021",
        details: "832/900 marks (92.44%)",
        highlight: "Scholarship Holder"
    }
];

function EducationSection() {
    return (
        <section className="common-section" id="education">
            <div className="section-header">
                <h2>EDUCATION</h2>
                <div className="section-underline"></div>
            </div>
            <div className="cards-grid">
                {educationData.map((edu) => (
                    <div key={edu.id} className="info-card education-card">
                        <div className="card-header">
                            <span className="card-icon">🎓</span>
                            <span className="card-date">{edu.date}</span>
                        </div>
                        <h3 className="card-title">{edu.degree}</h3>
                        <h4 className="card-subtitle">{edu.institution}</h4>
                        <p className="card-desc">{edu.details}</p>
                        <span className="card-badge">{edu.highlight}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationSection;
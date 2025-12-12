import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const achievementsData = [
    {
        id: 1,
        title: "Gold Medalist",
        context: "Software Engineering Dept",
        desc: "Secured 1st Position and highest GPA in the department.",
        date: "2025"
    },
    {
        id: 2,
        title: "Merit Scholarship",
        context: "Academic Excellence",
        desc: "Awarded for consistent performance throughout 2019-2023.",
        date: "2019-2023"
    },
    {
        id: 3,
        title: "Dean’s Honor List",
        context: "FAST-NUCES",
        desc: "Recognized for academic excellence in Spring '24 & Fall '25.",
        date: "2024-2025"
    }
];

function AchievementsSection() {
    return (
        <section className="about-section" id="achievements">
            <div className="section-header">
                <h2>ACHIEVEMENTS</h2>
                <div className="section-underline"></div>
            </div>
            <div className="cards-grid">
                {achievementsData.map((item) => (
                    <div key={item.id} className="info-card">
                        <div className="card-header-line">
                            <span className="card-date">{item.date}</span>
                            <FaTrophy className="card-icon" style={{ color: '#ffd700' }} />
                        </div>
                        
                        <h3 className="card-title">{item.title}</h3>
                        <h4 className="card-subtitle">{item.context}</h4>
                        <p className="card-desc">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AchievementsSection;
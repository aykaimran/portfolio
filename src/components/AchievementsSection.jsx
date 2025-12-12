import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const achievementsData = [
    {
        id: 1,
        title: "Gold Medalist (1st Position)",
        context: "Software Engineering Dept",
        desc: "Secured highest GPA in the department."
    },
    {
        id: 2,
        title: "Merit Scholarship",
        context: "2019 – 2023",
        desc: "Awarded for consistent academic excellence."
    },
    {
        id: 3,
        title: "Dean’s Honor List",
        context: "FAST-NUCES",
        desc: "Recognized in Spring 2024 and Fall 2025."
    },
    {
        id: 4,
        title: "CodeBees Certification",
        context: "Competitive Programming",
        desc: "Java Programming Certification (Oct 2025)."
    },
    {
        id: 5,
        title: "Co-Head of Decor",
        context: "IEEE RAS",
        desc: "Led society initiatives and organized major events."
    },
    {
        id: 6,
        title: "Head of Security",
        context: "Sports Fest 2023",
        desc: "First female appointee to lead security operations."
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
                            <FaTrophy className="card-icon" style={{ color: '#ffd700', marginRight: '15px' }} />
                            <span className="card-date">{item.date}</span>
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
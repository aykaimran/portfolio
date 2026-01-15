import React from 'react';
import { FaLanguage } from 'react-icons/fa';

const languagesData = [
  {
    id: 1,
    language: "Urdu",
    level: "Fluent",
    desc: "Native proficiency with strong reading, writing, and speaking skills."
  },
  {
    id: 2,
    language: "English",
    level: "Fluent",
    desc: "Professional working proficiency for academic, technical, and communication purposes."
  },
  {
    id: 3,
    language: "French",
    level: "Intermediate",
    desc: "Conversational understanding with basic reading and writing ability."
  }
];

function LanguagesSection() {
  return (
    <section className="about-section" id="languages">
      <div className="section-header">
        <h2>LANGUAGES</h2>
        <div className="section-underline"></div>
      </div>

      <div className="cards-grid">
        {languagesData.map((lang) => (
          <div key={lang.id} className="info-card">
            <div className="card-header-line">
              <FaLanguage className="card-icon" style={{ marginRight: '15px' }} />
              <span className="card-date">  {lang.level}</span>
            </div>

            <h3 className="card-title">{lang.language}</h3>
            <p className="card-desc">{lang.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;

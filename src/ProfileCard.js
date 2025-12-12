import React from 'react';

const ProfileCard = () => {
  // You can easily edit your details here
  const profile = {
    name: "Your Name Here",
    role: "Software Developer",
    bio: "Passionate about building accessible web apps and solving complex problems with simple code.",
    skills: ["React", "JavaScript", "CSS", "Node.js"],
    contact: "email@example.com"
  };

  return (
    <div className="profile-card">
      <div className="profile-image-placeholder">
        {/* Placeholder for an image */}
        <span>IMG</span> 
      </div>
      <h2>{profile.name}</h2>
      <h3 className="role">{profile.role}</h3>
      <p className="bio">{profile.bio}</p>
      
      <div className="skills-section">
        <h4>Skills</h4>
        <div className="skills-list">
          {profile.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      
      <button className="contact-btn" onClick={() => window.location = `mailto:${profile.contact}`}>
        Contact Me
      </button>
    </div>
  );
};

export default ProfileCard;
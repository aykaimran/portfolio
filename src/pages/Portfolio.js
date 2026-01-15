
import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ExperienceSection from '../components/ExperienceSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import EducationSection from '../components/EducationSection.jsx'; 
import AchievementsSection from '../components/AchievementsSection.jsx';
import ContactSection from '../components/ContactSection.jsx'; 
import LanguagesSection from '../components/LanguagesSection.jsx'; 
function Portfolio() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            
            {/* Grouping Work & Projects */}
            <ExperienceSection />
             <LanguagesSection /> 
            <ProjectsSection />
            
            {/* Grouping Academic & Awards */}
            <EducationSection />
            <AchievementsSection />
            
            <ContactSection />
        </>
    );
}

export default Portfolio;
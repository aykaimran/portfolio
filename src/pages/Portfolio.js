
// import React from 'react';
// // Import all the new components
// import HeroSection from '../components/HeroSection.jsx';
// import AboutSection from '../components/AboutSection.jsx';
// import ProjectsSection from '../components/ProjectsSection.jsx';
// import ContactSection from '../components/ContactSection.jsx'; 

// function Portfolio() {
//     return (
//         <>
//             {/* Hero Section */}
//             <HeroSection />

//             {/* About Section */}
//             <AboutSection />

//             {/* Projects/Articles Section */}
//             <ProjectsSection />

//             {/* Contact Section */}
//             <ContactSection />
//         </>
//     );
// }

// export default Portfolio;

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
// import React, { useEffect } from 'react';
// import './App.css';
// import ProfileCard from './ProfileCard';
// import FloatingEmojis from './FloatingEmojis';

// function App() {
//   useEffect(() => {
//     // Add cursor trail effect
//     const handleMouseMove = (e) => {
//       const cursorTrail = document.createElement('div');
//       cursorTrail.className = 'cursor-trail';
//       cursorTrail.style.left = `${e.pageX}px`;
//       cursorTrail.style.top = `${e.pageY}px`;
//       document.body.appendChild(cursorTrail);
      
//       setTimeout(() => {
//         cursorTrail.remove();
//       }, 1000);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="App">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="logo">AYKA</div>
//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           {/* <a href="#blog">Blog</a> */}
//           <a href="#projects">Projects</a>
//           {/* <a href="#resources">Recursos</a> */}
//           {/* <a href="#store">Tienda</a> */}
//           <a href="#contact">Contact</a>
//         </div>
//       </nav>

//       {/* Hero Section with Background Image */}
//       <section className="hero-section" id="home">
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1 className="hero-title">
//               <span className="hero-greeting">Bonjour</span>
//               <span className="hero-name">I am Ayka Imran</span>
//             </h1>
//             <div className="fullstack-badge">
//               <h2>Full-Stack Developer</h2>
//             </div>
//             <p className="hero-description">
//               Trabajo con Oracle y uso mucho Notion y Obsidian. Desarrollo webs con React,
//               JavaScript, Python, Node.js, Angular y más
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about-section" id="about">
//         <div className="about-container">
//           <div className="profile-image-container">
//             <div className="profile-image-wrapper">
//               <div className="profile-image">
//                 {/* Your picture goes here */}
//                 <div className="image-placeholder">
//                   <span className="image-text">TU FOTO</span>
//                 </div>
//                 <div className="profile-glow"></div>
//               </div>
//               <div className="profile-tech-stack">
//                 {['React', 'JavaScript', 'Python', 'Node.js', 'Angular'].map((tech, index) => (
//                   <div key={index} className="tech-bubble" style={{ animationDelay: `${index * 0.2}s` }}>
//                     {tech}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div className="about-content">
//             <div className="section-header">
//               <h2>CONÓCEME</h2>
//               <div className="section-underline"></div>
//             </div>
//             <div className="about-text">
//               <p>
//                 Soy un desarrollador Full-Stack apasionado por crear soluciones innovadoras y eficientes. 
//                 Con experiencia en diversas tecnologías y frameworks, me especializo en construir 
//                 aplicaciones web modernas y escalables.
//               </p>
//               <p>
//                 Mi enfoque combina la creatividad del diseño frontend con la robustez del backend, 
//                 siempre buscando las mejores prácticas y las tecnologías más adecuadas para cada proyecto.
//               </p>
//             </div>
            
//             <div className="experience-cards">
//               <div className="exp-card">
//                 <div className="exp-icon">💼</div>
//                 <h3>Experiencia</h3>
//                 <p>+3 años desarrollando soluciones empresariales</p>
//               </div>
//               <div className="exp-card">
//                 <div className="exp-icon">🚀</div>
//                 <h3>Proyectos</h3>
//                 <p>20+ proyectos completados exitosamente</p>
//               </div>
//               <div className="exp-card">
//                 <div className="exp-icon">🎯</div>
//                 <h3>Enfoque</h3>
//                 <p>Calidad y eficiencia en cada línea de código</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Recent Articles */}
//       <section className="articles-section">
//         <div className="section-header">
//           <h2>ARTÍCULOS RECIENTES</h2>
//           <div className="section-underline"></div>
//         </div>
//         <div className="articles-grid">
//           {[1, 2, 3].map((article) => (
//             <div key={article} className="article-card">
//               <div className="article-date">May 2024</div>
//               <h3 className="article-title">Desarrollo Web Moderno con React</h3>
//               <p className="article-excerpt">
//                 Explorando las mejores prácticas y patrones en el desarrollo frontend...
//               </p>
//               <button className="read-more-btn">Leer más →</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Floating Emojis */}
//       {/* <FloatingEmojis /> */}
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Add cursor trail effect
    const handleMouseMove = (e) => {
      const cursorTrail = document.createElement('div');
      cursorTrail.className = 'cursor-trail';
      cursorTrail.style.left = `${e.pageX}px`;
      cursorTrail.style.top = `${e.pageY}px`;
      document.body.appendChild(cursorTrail);
      
      setTimeout(() => {
        cursorTrail.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">AYKA IMRAN</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="hero-section" id="home">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-greeting">Bonjour</span>
              <span className="hero-name">I am Ayka Imran</span>
            </h1>
            <div className="fullstack-badge">
              <h2>Full-Stack Developer</h2>
            </div>
            <p className="hero-description">
              I work with Oracle and use Notion and Obsidian extensively. I develop web applications with React,
              JavaScript, Python, Node.js, Angular and more.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <div className="profile-image">
                {/* Your picture goes here */}
                <div className="image-placeholder">
                  <span className="image-text">MY PHOTO</span>
                </div>
                <div className="profile-glow"></div>
              </div>
              <div className="profile-tech-stack">
                {['React', 'JavaScript', 'Python', 'Node.js', 'Angular'].map((tech, index) => (
                  <div key={index} className="tech-bubble" style={{ animationDelay: `${index * 0.2}s` }}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <div className="section-header">
              <h2>ABOUT ME</h2>
              <div className="section-underline"></div>
            </div>
            <div className="about-text">
              <p>
                I am a passionate Full-Stack Developer dedicated to creating innovative and efficient solutions. 
                With experience in various technologies and frameworks, I specialize in building 
                modern and scalable web applications.
              </p>
              <p>
                My approach combines the creativity of frontend design with the robustness of backend development, 
                always seeking best practices and the most suitable technologies for each project.
              </p>
            </div>
            
            <div className="experience-cards">
              <div className="exp-card">
                <div className="exp-icon">💼</div>
                <h3>Experience</h3>
                <p>+3 years developing enterprise solutions</p>
              </div>
              <div className="exp-card">
                <div className="exp-icon">🚀</div>
                <h3>Projects</h3>
                <p>20+ projects successfully completed</p>
              </div>
              <div className="exp-card">
                <div className="exp-icon">🎯</div>
                <h3>Focus</h3>
                <p>Quality and efficiency in every line of code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="articles-section">
        <div className="section-header">
          <h2>RECENT ARTICLES</h2>
          <div className="section-underline"></div>
        </div>
        <div className="articles-grid">
          {[1, 2, 3].map((article) => (
            <div key={article} className="article-card">
              <div className="article-date">May 2024</div>
              <h3 className="article-title">Modern Web Development with React</h3>
              <p className="article-excerpt">
                Exploring best practices and patterns in frontend development...
              </p>
              <button className="read-more-btn">Read more →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2>GET IN TOUCH</h2>
          <div className="section-underline"></div>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>I'm always open to discussing new opportunities and creative projects.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>ayka.imran@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Based in United Kingdom</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
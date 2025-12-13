import React, { useEffect } from 'react';
import './App.css';
import Portfolio from './pages/Portfolio.js'; 

function App() {
  
  useEffect(() => {
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
      <nav className="navbar">
        <div className="logo">AYKA IMRAN</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <Portfolio />
      
    </div>
  );
}

export default App;
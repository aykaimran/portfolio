import React, { useState, useEffect } from 'react';
import './App.css';
import Portfolio from './pages/Portfolio.js';

function App() {
  const [loadingState, setLoadingState] = useState('loading'); // 'loading' | 'moving' | 'complete'
  const [isNavbarLogoVisible, setIsNavbarLogoVisible] = useState(false);

  useEffect(() => {
    // Phase 1: Initial loading (2 seconds)
    const loadingTimer = setTimeout(() => {
      setLoadingState('moving');
    }, 2000);

    // Phase 2: Moving animation (1.5 seconds)
    const movingTimer = setTimeout(() => {
      setLoadingState('complete');
      setIsNavbarLogoVisible(true);
    }, 3500); // 2000ms loading + 1500ms moving

    // Cursor trail effect
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
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(movingTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      {/* Loading Screen */}
      <div className={`loading-screen ${loadingState === 'complete' ? 'hidden' : ''}`}>
        <div className="loading-content">
          <div 
            className={`loading-name ${
              loadingState === 'loading' ? 'centered' : 
              loadingState === 'moving' ? 'moving-to-top' : 
              'at-top'
            }`}
          >
            AYKA IMRAN
          </div>
          <div className={`loading-bar-container ${loadingState !== 'loading' ? 'fade-out' : ''}`}>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
            <div className="loading-text">Loading Portfolio...</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${loadingState === 'complete' ? 'visible' : ''}`}>
        <nav className="navbar">
          <div className={`logo ${isNavbarLogoVisible ? 'visible' : ''}`}>AYKA IMRAN</div>
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
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <ProfileCard />
      </main>
    </div>
  );
}

export default App;
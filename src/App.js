import React from 'react';
import './App.css';
import spider from './spider-web.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={spider} className="spiderImage" alt="image" />
        <p>
          Saman made it work.
        </p>
        <a
          className="link"
          href="https://github.com/navidasaman"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub/navidasaman
        </a>
      </header>
    </div>

  );
}

export default App;

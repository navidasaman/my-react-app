import React from 'react';
import './assets/css/App.css';
import spider from '../src/assets/images/spider-web.png';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="bg-primary text-secondary">
        <Navbar />
      </div>
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
      <p className="text-5xl font-medium underline center">hej</p>

    </div>

  );
}

export default App;

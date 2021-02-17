import React from 'react';
import './css/app.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <section id="home">
        <Navbar />
        <Home />
      </section>
      <section id="about">
        
      </section>
      <section id="projects">
        
      </section>
      <section id="contact">
        
      </section>
      <footer id="footer">

      </footer>
    </div>
  );
}

export default App;

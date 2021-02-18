// Dependancy imports
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// CSS Styling
import './css/app.css';

// Import Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Higher-order component for providing context consumer
import withContext from './Context';


// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

// Components with context
const ProjectsWithContext = withContext(Projects);

// Main app
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectsWithContext} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;

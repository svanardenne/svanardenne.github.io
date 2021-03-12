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
import ScrollToTop from './components/ScrollToTop';

// Higher-order component for providing context consumer
import withContext from './Context';


// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

// Components with context
const HomeWithContext = withContext(Home);
const aboutWithContext = withContext(About);
const ProjectsWithContext = withContext(Projects);
const contactWithContext = withContext(Contact);


// Main app
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Navbar />
          <Switch>
            <Redirect exact path={process.env.PUBLIC_URL + '/'} to={process.env.PUBLIC_URL + '/home'} />
            <Route path={process.env.PUBLIC_URL + '/home'} component={HomeWithContext} />
            <Route path={process.env.PUBLIC_URL + '/about'} component={aboutWithContext} />
            <Route path={process.env.PUBLIC_URL + '/projects'} component={ProjectsWithContext} />
            <Route path={process.env.PUBLIC_URL + '/contact'} component={contactWithContext} />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

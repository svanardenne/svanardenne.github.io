import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './css/app.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

import React from 'react';
import './App.css';

import Header from './components/app/Header';
import Home from './pages/Home';
import About from './pages/About';

import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

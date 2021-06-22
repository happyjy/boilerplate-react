import React from 'react';
import Links from './pages/Links';
import NavLinks from './pages/NavLinks';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Topics from './pages/Topics';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Links />
        <NavLinks />

        <Switch>
          <Route path="/about" component={About} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/topics" component={Topics} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

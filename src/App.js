import React from 'react';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';
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
        <h1>Link 사용(react-router-dom)</h1>
        <Links />
        <h1>NavLinks 사용(react-router-dom)</h1>
        <NavLinks />

        <hr></hr>
        <Switch>
          <Route path="/about" component={About} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/topics" component={Topics} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

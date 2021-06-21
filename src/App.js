import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Topics from './pages/Topics';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/profile/happyjy">Profile:happjy</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about" component={About} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/topics" component={Topics} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

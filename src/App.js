import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route path="/ranking" component={ Ranking } />
      <Route path="/settings" component={ Settings } />
      <Route path="/game" component={ Game } />
      <Route path="/feedback" component={ Feedback } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

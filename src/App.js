import React from 'react';
import './App.css';
import Auth from './containers/Auth'
import Private from './containers/private'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Auth>
        <Private />
      </Auth>
    </Router>
  );
}

export default App;

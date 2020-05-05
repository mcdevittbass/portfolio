import React from 'react';
import './App.scss';
import Main from './components/MainComponent';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;

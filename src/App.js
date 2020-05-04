import React from 'react';
import './App.scss';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/portfolio'>
      <Main />
    </BrowserRouter>
  );
}

export default App;

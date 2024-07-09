// src/App.js
import React from 'react';
import Accordion from './components/Accordion';
import './App.css'; // Make sure to include some basic styling

const App = () => {
  return (
    <div className="App">
      <h1>Accordion Example with Redux</h1>
      <Accordion />
    </div>
  );
};

export default App;

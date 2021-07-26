import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayText from './DisplayText';

function App() {
  return (
    <div className="App" data-testid='app'>
      <DisplayText />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Merchants from './Merchants/Merchants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Visa Small Business Rewards Platform</p>
      </header>
      <div className="app-container">
        <div className="map-container">
          TODO: Map
        </div>
        <Merchants />
      </div>
    </div>
  );
}

export default App;

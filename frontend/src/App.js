import React from 'react';
import './App.css';

import Merchants from './Merchants/Merchants';
import Map from './Map/Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Visa Small Business Rewards Platform</p>
      </header>
      <div className="app-container">
        <Map />
        <Merchants />
      </div>
    </div>
  );
}

export default App;

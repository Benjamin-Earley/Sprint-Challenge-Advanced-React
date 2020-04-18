import React from 'react';
import './App.css';

import PlayersList from './Components/PlayersList'
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <PlayersList />
    </div>
  );
}

export default App;

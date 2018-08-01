import React, { Component } from 'react';
import './App.css';
import PlacarTime from './PlacarTime';

class App extends Component {
  render() {
    return (
      <div className="placar">
        <PlacarTime nomeTime="Corinthians"/>
        X
        <PlacarTime nomeTime="Chapecoense" visitante="true"/>
      </div>
    );
  }
}

export default App;
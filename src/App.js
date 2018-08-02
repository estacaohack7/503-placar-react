import React, { Component } from 'react';
import './App.css';
import PlacarTime from './PlacarTime';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time1: '',
      time2: '',
      gols1: 0,
      gols2: 0
    }
  }
  
  incrementar = numero => {
    let novoState = {};
    novoState[`gols${numero}`] = this.state[`gols${numero}`] + 1;
    this.setState(novoState);
  }

  atualizar = () =>{
    this.setState({
      gols1: 0,
      gols2: 0
    });
  }

  render() {
    return (
      <div>
        <div className="controles">
          <input name="1" onChange={evento => this.setState({time1: evento.target.value})} type="text" placeholder="Digite o nome do time da casa" value={this.state.time1} />
          <input name="2" onChange={evento => this.setState({time2: evento.target.value})} type="text" placeholder="Digite o nome do time visitante" value={this.state.time2}/>
          <button onClick={this.atualizar}>Zerar placar</button>
        </div>
        <div className="placar">
          <PlacarTime numero="1" gols={this.state.gols1} nomeTime={this.state.time1} funcaoBotao={this.incrementar} />
          X
          <PlacarTime numero="2" gols={this.state.gols2}nomeTime={this.state.time2} funcaoBotao={this.incrementar} visitante="true"/>
        </div>
      </div>
    );
  }
}

export default App;
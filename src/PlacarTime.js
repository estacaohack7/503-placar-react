import React, { Component } from 'react';
import './PlacarTime.css';

class PlacarTime extends Component {
    constructor(props){
        super(props);
        this.texto = "Time da casa";
        this.state = {
            gols: 0
        }
    }
  
    incrementar = () => {
        this.setState({
            gols: this.state.gols + 1
        });
    }

    render() {

        console.log(this.state);

        if(this.props.visitante === "true"){
            this.texto = "Time visitante";
        }

        return (
            <div className="placartime">
                <h1>{this.props.nomeTime || this.texto}</h1>
                <h2>{this.state.gols}</h2>
                <button className="gol" onClick={this.incrementar}>
                    GOL!
                </button>
            </div>
        );
  }
}

export default PlacarTime;
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import json_data from "./frases.json";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frase: "..."
    }

    this.gerarFrase();
  }

  geraNumeroInteiro(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  mudaFrase = event => {
    const fraseGenerator = this.todasFrases[this.geraNumeroInteiro(0, 11)];
    this.setState({
      frase: fraseGenerator
    });
  };

  gerarFrase = () => {
    const totalFrases = json_data;

    this.todasFrases = totalFrases.map(frases => frases.frase);
  };

  render() {
    return (
      <div className="container">
        <p>{this.state.frase}</p>
        <button onClick={this.mudaFrase} className="btn">Gerar Frase</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./Pokecard.css";
// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    console.log(this.props); //available properties from Pokedex.js that can be passed here
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;

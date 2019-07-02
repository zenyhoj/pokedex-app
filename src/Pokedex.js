import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 4,
        name: "Charmander",
        type: "fire",
        base_experience: 62
      },
      {
        id: 7,
        name: "Squirtle",
        type: "water",
        base_experience: 63
      },
      {
        id: 11,
        name: "Metapod",
        type: "bug",
        base_experience: 72
      },
      {
        id: 12,
        name: "Butterfree",
        type: "flying",
        base_experience: 178
      },
      {
        id: 25,
        name: "Pikachu",
        type: "electric",
        base_experience: 112
      },
      {
        id: 39,
        name: "Jigglypuff",
        type: "normal",
        base_experience: 95
      },
      {
        id: 94,
        name: "Genger",
        type: "poison",
        base_experience: 255
      },
      {
        id: 133,
        name: "Eevee",
        type: "normal",
        base_experience: 55
      }
    ]
  };
  render() {
    return (
      <div className="Pokedex">
        {/* This loops through pokemon defaultProps and render Pokecard each loop */}
        {this.props.pokemon.map((p, index) => (
          <Pokecard
            key={index} /* unique key required */
            /* Properties that can be passed to Pokecard*/
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;

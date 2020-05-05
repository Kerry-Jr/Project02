import React from "react";
import "./style.css";

const PokemonCard = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="Pokemon" src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Pokemon:</strong> {props.name}
          </li>
          <li>
            <strong>Ability:</strong> {props.ability}
          </li>
          <li>
            <strong>Height:</strong> {props.height}
          </li>
          <li>
            <strong>Base {props.stats[0].stat.name}:</strong> {props.stats[0].base_stat}
          </li>
          <li>
            <strong>Base {props.stats[1].stat.name}:</strong> {props.stats[1].base_stat}
          </li>
          <li>
            <strong>Base {props.stats[2].stat.name}:</strong> {props.stats[2].base_stat}
          </li>
          <li>
            <strong>Base {props.stats[3].stat.name}:</strong> {props.stats[3].base_stat}
          </li>
          <li>
            <strong>Base {props.stats[4].stat.name}:</strong> {props.stats[4].base_stat}
          </li>
          <li>
            <strong>Base {props.stats[5].stat.name}:</strong> {props.stats[5].base_stat}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
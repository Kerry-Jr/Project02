import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import './../../assets/css/style.css';

const RecipeCard = (props) => {
  return (
    <div>
      <div>
        <a href={props.address}>
          <div className="card delta fluid">
            <div className="card-body">
              <h5 className="card-title">{props.food}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Estimated Time: {props.type}</h6>
              <img src={props.image}></img>
              <p className="card-text">{props.foodStuff}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RecipeCard
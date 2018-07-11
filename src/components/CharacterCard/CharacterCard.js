import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
      <img onClick={() => props.handleCardClick(props.id)} alt={props.name} src={props.image} />
  </div>
);

export default CharacterCard;

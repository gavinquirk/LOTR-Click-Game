import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
      {/* On Click, handle card click function from app.jsx */}
      <img onClick={() => props.handleCardClick(props)} alt={props.name} src={props.image} />
  </div>
);

export default CharacterCard;

import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
      {/* On Click, handle card click function from app.jsx */}
<<<<<<< HEAD
      <img onClick={() => props.handleCardClick(props.id)} alt={props.name} src={props.image} />
      {/* <img onClick={() => props.scoreTest()} alt={props.name} src={props.image} /> */}

=======
      <img onClick={() => props.handleCardClick(props)} alt={props.name} src={props.image} />
>>>>>>> c8d6c4ee52f7b89e0411cb4d4fba1d4c96de1371
  </div>
);

export default CharacterCard;

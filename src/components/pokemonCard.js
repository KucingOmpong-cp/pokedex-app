import React from "react";

const PokemonCard = ({id, image, name, type, _callback }) => {
  const test = type.length;
  console.log(test)
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-detail">
        <div className="number"><small>#{id}</small></div>
        <h3>{name}</h3>
        <small className={type}>{type}</small>
      </div>
    </div>
  )
}

export default PokemonCard
import React from "react";
import "./ItemCar.css";

export default function ItemCar({ item }) {
  const { image, name, driver, team } = item;

  return (
    <article className="item-car">
      <div className="container">
        <img src={image} alt="formula 1 car" />
        <h3> {name}</h3>
        <p>Driver: <b>{driver}</b></p>
        <p>Team: <b>{team}</b></p> 
      </div>
    </article>
  );
}

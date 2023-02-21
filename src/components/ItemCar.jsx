import React from "react";

export default function ItemCar({ item }) {
  const { image, name, driver, team } = item;

  return (
    <article className="item-car">
      <img src={image} alt="formula 1 car" />
      <h3> {name}</h3>
      <ul>
        <li>
          Driver: <b>{driver}</b>{" "}
        </li>
        <li>
          Team: <b>{team}</b>{" "}
        </li>
      </ul>
    </article>
  );
}

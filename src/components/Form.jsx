import React from "react";
import { addCars } from "../scripts/fireStore";
import "./Form.css";

export default function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = {
      driver: e.target["driver"].value,
      image: e.target["image"].value,
      name: e.target["name"].value,
      team: e.target["team"].value,
    };
    addCars(item);
  };

  return (
    <div className="form">
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="name" placeholder="Car name" />
        <input type="text" name="driver" placeholder="Driver name" />
        <input type="text" name="team" placeholder="Team name" />
        <input type="submit" value="Add car" />
      </form>
    </div>
  );
}

import React from "react";

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="image" placeholder="Image URL"></input>
        <input type="text" name="name" placeholder="Car name"></input>
        <input type="text" name="driver" placeholder="Driver name"></input>
        <input type="text" name="team" placeholder="Team name"></input>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

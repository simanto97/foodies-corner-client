import React, { useEffect, useState } from "react";
import ChefCardEach from "../ChefCardEach/ChefCardEach";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h2>Chefs {chefs.length}</h2>
      <div
        className=""
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {chefs.map((chef) => (
          <ChefCardEach key={chef.id} chef={chef}></ChefCardEach>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;

import React, { useEffect, useState } from "react";
import ChefCardEach from "../ChefCardEach/ChefCardEach";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-simanto97.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h2 className="fs-1 fw-bold text-center p-5">
        Here is our
        <span className="text-success"> Chefs</span>
      </h2>
      <div className="mb-4 row row-cols-lg-3 g-3">
        {chefs.map((chef) => (
          <ChefCardEach key={chef.id} chef={chef}></ChefCardEach>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;

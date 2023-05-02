import React, { useEffect, useState } from "react";

const LeftNav = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h2>What customers are saying About Us {customers.length}</h2>
    </div>
  );
};

export default LeftNav;

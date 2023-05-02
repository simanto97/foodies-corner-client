import React, { useEffect, useState } from "react";
import CustomerCard from "../../Pages/Home/CustomerCard/CustomerCard";
import { Container } from "react-bootstrap";

const LeftNav = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error));
  });
  return (
    <Container className="my-4">
      <h2 className="fs-1 fw-bold text-center">
        What customers are saying <br />
        <span className="text-success">About Us</span>
      </h2>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer}></CustomerCard>
      ))}
    </Container>
  );
};

export default LeftNav;

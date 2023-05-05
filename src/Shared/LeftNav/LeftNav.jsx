import React, { useEffect, useState } from "react";
import CustomerCard from "../../Pages/Home/CustomerCard/CustomerCard";
import { Container } from "react-bootstrap";

const LeftNav = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-simanto97.vercel.app/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error));
  });
  return (
    <Container className="my-4">
      <h2 className="fs-1 fw-bold text-center p-5">
        What customers are saying <br />
        <span className="text-success">About Us</span>
      </h2>
      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-between">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer}></CustomerCard>
        ))}
      </div>
    </Container>
  );
};

export default LeftNav;

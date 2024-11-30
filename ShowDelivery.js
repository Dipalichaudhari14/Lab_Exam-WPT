import React, { useEffect, useState } from "react";

export default function ShowDelivery() {
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/showdelivery")
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        setData(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <h1>Show Deliveries</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Delivery Date</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Delivery Fee</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((record) => (
              <tr>
                <td>{record.orderId}</td>
                <td>{record.deliveryDate}</td>
                <td>{record.deliveryAddress}</td>
                <td>{record.deliveryFee}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useRef } from "react";

export default function AddDelivery() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  let x4 = useRef();
  function f1() {
    var data = {
      orderId: x1.current.value,
      deliveryDate: x2.current.value,
      deliveryAddress: x3.current.value,
      deliveryFee: x4.current.value,
    };
    data = JSON.stringify(data);
    fetch("http://localhost:8000/adddelivery", {
      method: "POST",
      body: data,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <h1>Add Delivery</h1>
      <br />
      <input type="text" placeholder="order id" ref={x1} />
      <br />
      <input type="text" placeholder="delivery date" ref={x2} />
      <br />
      <input type="text" placeholder="delivery address" ref={x3} />
      <br />
      <input type="text" placeholder="delivery fee" ref={x4} />
      <br />
      <button onClick={f1}>Add</button>
    </div>
  );
}

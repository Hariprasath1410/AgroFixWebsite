import React, { useState } from "react";
import API from "../../services/api";
import "./OrderTracking.css";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const handleTrack = () => {
    API.get(`/orders/${orderId}`)
      .then((res) => setStatus(res.data.status))
      .catch(() => setStatus("Invalid order ID or server error"));
  };

  return (
    <div className="track-container">
      <h2>Track Your Order</h2>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Enter Order ID"
      />
      <button onClick={handleTrack}>Track</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
};

export default OrderTracking;

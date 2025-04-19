import React, { useState } from "react";
import API from "../../services/api";
import "./OrderForm.css";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    name: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/orders", formData)
      .then(() => {
        alert("Order placed successfully!");
        setFormData({ product: "", quantity: "", name: "", contact: "", address: "" });
      })
      .catch(() => alert("Order failed. Please try again."));
  };

  return (
    <div className="form-container">
      <h2>Place an Order</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        {["product", "quantity", "name", "contact", "address"].map((field) => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
          />
        ))}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;

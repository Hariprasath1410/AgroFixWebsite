import React, { useState, useEffect } from "react";
import API from "./../services/api";
import "./OrderManagement.css";  // Import the CSS file

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch orders when the component is mounted
    API.get("/admin/orders")
      .then((res) => setOrders(res.data))
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const updateStatus = async (id, status) => {
    try {
      // Set loading state to true to disable buttons
      setLoading(true);
      
      // Send the updated status to the server
      await API.put(`/orders/${id}`, { status });
      
      // Update the local state to reflect the status change
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    } finally {
      // Set loading state back to false
      setLoading(false);
    }
  };

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <span>{order.product} - {order.status}</span>
            <div>
              <button
                onClick={() => updateStatus(order.id, "In Progress")}
                disabled={order.status === "In Progress" || order.status === "Delivered" || loading}
              >
                In Progress
              </button>
              <button
                onClick={() => updateStatus(order.id, "Delivered")}
                disabled={order.status === "Delivered" || loading}
              >
                Delivered
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;

import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <nav>
      <Link to="/admin/orders">Order Management</Link>
      <Link to="/admin/inventory">Inventory Management</Link>
    </nav>
  </div>
);

export default AdminDashboard;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();

  
  const [customers, setCustomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0); 
  const [revenue, setRevenue] = useState(0); 
  const [recentOrders, setRecentOrders] = useState([]); 

  
  async function getCustomers() {
    try {
      const response = await fetch("https://horsegearbackend.onrender.com/user/getusers");
      const result = await response.json();
      const count = result.data ? result.data.length : result.length;
      setCustomers(count || 0);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }


  async function getProducts() {
    try {
      const response = await fetch("https://horsegearbackend.onrender.com/product/getproduct");
      const result = await response.json();
      const count = result.data ? result.data.length : result.length;
      setProducts(count || 0);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  function getExtraDashboardData() {
    setOrders(142);
    setRevenue(45250);
    setRecentOrders([
      { id: "#1024", customer: "Rahul Sharma", product: "Leather Saddle", Price: "₹12,000", status: "Delivered" },
      { id: "#1023", customer: "Amit Patel", product: "Riding Boots", Price: "₹4,500", status: "Pending" },
      { id: "#1022", customer: "Priya Singh", product: "Horse Grooming Kit", Price: "₹2,200", status: "Shipped" },
      { id: "#1021", customer: "Vikram Malhotra", product: "Premium Hay Feed", Price: "₹1,800", status: "Delivered" },
    ]);
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Please login first to access Admin Panel!");
      navigate("/login");
      return;
    }

    getCustomers();
    getProducts();
    getExtraDashboardData();
  }, [navigate]);

  return (
    <div className="admin-panel-layout-wrapper">
      
 
      <aside className="admin-sidebar-navigation">
        <div className="admin-brand-logo-frame">
          <h2>HORSE CLUB</h2>
          <span className="admin-badge-tag">ADMIN</span>
        </div>

        <nav className="admin-sidebar-menu-links">
          <ul>
            <Link to="/admin/dashboard" className="admin-menu-nav-link">
              <li className="active-menu-node">Dashboard</li>
            </Link>
            <Link to="/customers" className="admin-menu-nav-link">
              <li>Customers</li>
            </Link>
            <Link to="/adminproducts" className="admin-menu-nav-link">
              <li>Products</li>
            </Link>
          </ul>
        </nav>
      </aside>

      
      <main className="admin-workspace-content-canvas">
        <section className="admin-core-render-viewport">
          
          <div className="dashboard-header-zone">
            <h1 className="admin-main-view-heading">Admin Dashboard Overview</h1>
          </div>

          <div className="admin-statistics-cards-grid">
            
            <div className="stat-card-box card-blue">
              <p className="card-title">TOTAL CUSTOMERS</p>
              <h3 className="card-value">{customers}</h3>
            </div>

            <div className="stat-card-box card-green">
              <p className="card-title">TOTAL PRODUCTS</p>
              <h3 className="card-value">{products}</h3>
            </div>

            <div className="stat-card-box card-orange">
              <p className="card-title">TOTAL ORDERS</p>
              <h3 className="card-value">{orders}</h3>
            </div>

            <div className="stat-card-box card-pink">
              <p className="card-title">TOTAL REVENUE</p>
              <h3 className="card-value">₹{revenue.toLocaleString()}</h3>
            </div>

          </div>

          <hr className="dashboard-divider" />

          <div className="dashboard-lower-grid">
            
            <div className="table-container-box">
              <h3 className="section-title">Recent Orders</h3>
              <div className="responsive-table-wrapper">
                <table className="custom-admin-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr key={index}>
                        <td className="order-id-cell">{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.product}</td>
                        <td>{order.Price}</td>
                        <td>
                          <span className={`status-badge status-${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="actions-container-box">
              <h3 className="section-title">Quick Actions</h3>
              <div className="actions-btn-stack">
                <button onClick={() => navigate("/adminproducts")} className="action-btn btn-primary">
                  ➕ Add New Product
                </button>
                <button onClick={() => navigate("/customers")} className="action-btn btn-success">
                  🔍 View Customer List
                </button>
                
                <div className="system-status-widget">
                  <h4>System Status</h4>
                  <p>🟢 All systems operational</p>
                  <p className="version-tag">v1.0.4 stable</p>
                </div>
              </div>
            </div>

          </div>

        </section>
      </main>

    </div>
  );
}

export default Dashboard;
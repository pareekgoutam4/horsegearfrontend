import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Customer() {
  const navigate = useNavigate();
  const [signdata, setsigndata] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [deleteconfirm, setdeleteconfirm] = useState(null);

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [editid, seteditid] = useState(null);

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first!");
    navigate("/login");
    return;
  }

  if (user.role !== "admin") {
    alert("Access Denied! Admin Only");
    navigate("/home");
    return;
  }

  datasign();
}, [navigate]);

  async function datasign() {
    try {
      const response = await fetch("https://horsegearbackend.onrender.com/user/getusers");
      const result = await response.json();
      setsigndata(result.data || result || []);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }

  async function remove(id) {
    try {
      await fetch(`https://horsegearbackend.onrender.com/user/delete/${id}`, {
        method: "DELETE"
      });
      alert("Customer Record Deleted");
      datasign();
    } catch (error) {
      alert("Something went Wrong");
    }
  }

  async function submit(e) {
    e.preventDefault();

    if (!fullname.trim() || !email.trim() || !password.trim()) {
      alert("Name, Email and Password are required!");
      return;
    }

    const customerData = { fullname, email, password };
    
    const url = editid 
      ? `https://horsegearbackend.onrender.com/user/update/${editid}`
      : "https://horsegearbackend.onrender.com/user/signup";
    
    const method = editid ? "PUT" : "POST";

    try {
      await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerData)
      });
      
      alert(editid ? "Data Updated Successfully" : "Customer Added Successfully");
      datasign();
      clearForm();
    } catch (error) {
      alert("Operation failed");
    }
  }

  function clearForm() {
    setfullname("");
    setemail("");
    setpassword("");
    seteditid(null);
    setShowForm(false);
  }

  function editcustomer(item) {
    setfullname(item.fullname || "");
    setemail(item.email || "");
    setpassword(item.password || "");
    seteditid(item._id);
    setShowForm(true);
  }

  return (
    <div className="admin-panel-layout-wrapper">
      
      <aside className="admin-sidebar-navigation">
        <div className="admin-brand-logo-frame">
          <h2>HORSE CLUB</h2>
          <span className="admin-badge-tag">ADMIN</span>
        </div>
        <nav className="admin-sidebar-menu-links">
          <ul>
            <li><Link to="/admin/dashboard" className="admin-menu-nav-link">Dashboard</Link></li>
            <li className="active-menu-node"><Link to="/customers" className="admin-menu-nav-link">Customers</Link></li>
            <li><Link to="/adminproducts" className="admin-menu-nav-link">Products</Link></li>
            
          </ul>
        </nav>
      </aside>

      <main className="admin-workspace-content-canvas">
        <section className="admin-core-render-viewport">
          
          <div className="customer-view-header-row">
            <h1>Customers Directory</h1>
            <button className="add-premium-cust-btn" onClick={() => { clearForm(); setShowForm(true); }}>
              + Add Customer
            </button>
          </div>

          <div className="admin-table-container-card">
            <table className="admin-custom-data-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {signdata.length > 0 ? (
                  signdata.map((item) => (
                    <tr key={item._id}>
                      <td className="font-bold-dark">{item.fullname}</td>
                      <td>{item.email}</td>
                      <td className="masked-pass">{item.password}</td>
                      <td>
                        <div className="table-action-btn-group">
                          <button className="row-edit-btn" onClick={() => editcustomer(item)}>Edit</button>
                          <button className="row-delete-btn" onClick={() => setdeleteconfirm(item._id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-records-row-text">No Registered Customer Records Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </section>
      </main>

      {showForm && (
        <div className="modal-overlay-blur">
          <div className="modal-workspace-card">
            <div className="modal-card-header">
              <h2>{editid ? "Modify Profile" : "Register Customer"}</h2>
              <button className="modal-close-icon-btn" onClick={clearForm}>&times;</button>
            </div>
            
            <form onSubmit={submit} className="modal-actual-form">
              <div className="form-input-node">
                <label>Full Name</label>
                <input value={fullname} onChange={(e) => setfullname(e.target.value)} type="text" placeholder="John Doe" required />
              </div>
              
              <div className="form-input-node">
                <label>Email Address</label>
                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-input-node">
                <label>Account Password</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Enter password" required />
              </div>

              <div className="modal-action-footer-buttons">
                <button type="button" className="btn-secondary-cancel" onClick={clearForm}>Discard</button>
                <button type="submit" className="btn-primary-submit">{editid ? "Save Changes" : "Create Profile"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteconfirm && (
        <div className="modal-overlay-blur">
          <div className="delete-alert-popup-box">
            <h3>Confirm Destruction</h3>
            <p>Are you sure you want to permanently erase this customer record?</p>
            <div className="delete-modal-action-row">
              <button className="cancel-destruction-trigger" onClick={() => setdeleteconfirm(null)}>Cancel</button>
              <button className="confirm-destruction-trigger" onClick={() => { remove(deleteconfirm); setdeleteconfirm(null); }}>Delete Record</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Customer;
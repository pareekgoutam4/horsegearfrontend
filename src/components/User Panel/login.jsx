import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();

  if (loginData.email.trim() === "" || loginData.password.trim() === "") {
    alert("All fields are required");
    return;
  }

  try {
    setIsLoading(true);

   
    if (
      loginData.email === "admin@gmail.com" &&
      loginData.password === "admin123"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: "admin@gmail.com",
          role: "admin",
        })
      );

      alert("Admin Login Successful");
      navigate("/admin/dashboard");
      return;
    }

   
    const response = await axios.get(
      "https://horsegearbackend.onrender.com/user/getusers"
    );

    const users = response.data;

    const validUser = users.find(
      (item) =>
        item.email === loginData.email &&
        item.password === loginData.password
    );

    if (validUser) {
      alert("Login Successful");

    localStorage.setItem(
  "user",
  JSON.stringify({
    ...validUser,
    role: "user",
  })
);

      navigate("/home");
    } else {
      alert("Invalid Email Or Password");
    }
  } catch (error) {
    console.log(error);
    alert("Something Went Wrong");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <>
    <main className="login-page-main-container">
      <div className="login-workspace-card-box">
   
        <div className="login-promo-side-panel">
          <div className="login-promo-overlay-tint">
            <div className="login-promo-content-inner">
              <img src="https://horse.oceanwp.org/wp-content/uploads/2021/04/hlogo.png" alt="Equestrian Logo" className="login-promo-horse-logo"/>
              <h2>Welcome Back</h2>
              <div className="login-promo-divider"></div>
              <p>Sign in to access your dashboard and orders.</p>
            </div>
          </div>
        </div>

       
        <div className="login-form-side-panel">
          <div className="login-form-header">
            <h2>Account Login</h2>
            <p>Please enter your credentials to proceed</p>
          </div>

          <form onSubmit={handleFormSubmit} className="login-actual-form-element">
            <div className="login-input-group-field">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="name@example.com" value={loginData.email} onChange={handleInputChange} required />
            </div>

            <div className="login-input-group-field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter your password" value={loginData.password} onChange={handleInputChange} required/>
            </div>

           

            <button type="submit" className="login-submit-brand-btn" disabled={isLoading}>
              {isLoading ? "LOGGING IN..." : "LOGIN"}
            </button>
          </form>

          <p className="login-redirect-signup-footer-text">Don't have an account yet? <Link to="/signup">Register here</Link></p>
        </div>
      </div>
    </main>
    </>
  );
}

export default Login;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/home");
      return; 
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (formData.fullName.trim() === "") {
      alert("Full Name Is Required");
      return;
    }

    if (formData.email.trim() === "") {
      alert("Email Is Required");
      return;
    }

    if (formData.password.trim() === "") {
      alert("Password Is Required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        "https://horsegearbackend.onrender.com/user/signup",
        {
          fullname: formData.fullName,
          email: formData.email,
          password: formData.password
        }
      );

      alert(response.data.message || "Signup Successful");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      navigate("/login");

    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Something Went Wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="signup-page-main-container">
        <div className="signup-workspace-card-box">
          
      
          <div className="signup-promo-side-panel">
            <div className="signup-promo-overlay-tint">
              <div className="signup-promo-content-inner">
                <img src="https://horse.oceanwp.org/wp-content/uploads/2021/04/hlogo.png" alt="logo" className="signup-promo-horse-logo" />
                <h2>Join The Club</h2>
                <div className="signup-promo-divider"></div>
                <p>
                  Register today to track your orders and unlock premium access.
                </p>
              </div>
            </div>
          </div>


          <div className="signup-form-side-panel">
            <div className="signup-form-header">
              <h2>Create Account</h2>
              <p> Click Here To See <Link className="home-btn" to="/">Home Page</Link></p>
            </div>

            <form onSubmit={submit} className="signup-actual-form-element">
              
              <div className="signup-input-group-field">
                <label>Full Name</label>
                <input type="text" name="fullName" placeholder="Enter full name" value={formData.fullName}onChange={handleInputChange}required/>
              </div>

            
              <div className="signup-input-group-field">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange}required/>
              </div>

      
              <div className="signup-input-group-field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange}required />
              </div>

              
              <div className="signup-input-group-field">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword"placeholder="Confirm password"value={formData.confirmPassword}onChange={handleInputChange}required/>
              </div>

            
              <button type="submit" className="signup-submit-brand-btn"disabled={isSubmitting}>
                {isSubmitting ? "CREATING ACCOUNT..." : "REGISTER NOW"}
              </button>
            </form>

            <p className="signup-redirect-login-footer-text">Already have an account?
              <Link to="/login"> Login here</Link>
            </p>
          </div>

        </div>
      </main>
    </>
  );
}

export default Signup;
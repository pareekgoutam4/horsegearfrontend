import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { getUser } from "../../utils/auth";

function Nav() {
  const { totalUniqueItems, emptyCart } = useCart();
  const navigate = useNavigate();


  const user = getUser();


  const handleLogout = () => {
    localStorage.removeItem("user");
    emptyCart();
    alert("Logout Successful");
    navigate("/login");
  };

  return (
    <>
      <div className="fullnav">


        <div className="topbar">
          <div className="social-icons">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-rss"></i>
          </div>

          <div className="top-text">
            <h3>Free delivery over $100 on all products</h3>
          </div>
        </div>


        <div className="navbar">


          <div className="logo">
            <Link to="/">
              <img src="https://horse.oceanwp.org/wp-content/uploads/2021/04/hlogo.png" alt="Horse Logo" />
            </Link>
          </div>


          <div className="menu">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                  HOMEPAGE
                </Link>
              </li>

              <li>
                <Link to="/shop" style={{ textDecoration: "none", color: "inherit" }}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}>
                  BLOG
                </Link>
              </li>

              <li>
                <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                  CONTACT
                </Link>
              </li>

              {user ? (
                <li onClick={handleLogout} style={{ cursor: "pointer", fontWeight: "bold", color: "#7A635B" }}>LOGOUT</li>
              ) : (
                <>
                  <li>
                    <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>LOGIN</Link>
                  </li>
                  <li>
                    <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>SIGNUP</Link>
                  </li>
                </>
              )}


            </ul>


            <Link to="/cart" className="cart-nav-link" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="cart">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="cart-badge-count">{totalUniqueItems}</span>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </>
  );
}

export default Nav;
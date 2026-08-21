import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { getUser } from "../../utils/auth";

function Nav() {
  const { totalUniqueItems, emptyCart } = useCart();
  const navigate = useNavigate();
  const user = getUser();

  // Mobile drawer open/close state
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    emptyCart();
    closeMenu();
    alert("Logout Successful");
    navigate("/");
  };

  return (
    <>
      <div className="fullnav">
        {/* Topbar */}
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

        {/* Main Navbar */}
        <div className="navbar">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img
                src="https://horse.oceanwp.org/wp-content/uploads/2021/04/hlogo.png"
                alt="Horse Logo"
              />
            </Link>
          </div>

          {/* Mobile Toggle Button (Desktop par hide rahega) */}
          <button className="mobile-toggle-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Screen Blur/Dark Overlay on Mobile */}
          {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}

          {/* Navigation Links + Cart Drawer */}
          <div className={`menu ${isOpen ? "drawer-open" : ""}`}>
            {/* Close Cross Button (Sirf mobile drawer ke andar) */}
            <button className="drawer-close-btn" onClick={closeMenu} aria-label="Close Menu">
              ✕
            </button>

            <ul>
              <li>
                <Link to="/" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
                  HOMEPAGE
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
                  CONTACT
                </Link>
              </li>

              {user ? (
                <li
                  onClick={handleLogout}
                  style={{ cursor: "pointer", fontWeight: "bold", color: "#7A635B" }}
                >
                  LOGOUT
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
                      LOGIN
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
                      SIGNUP
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="cart-nav-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
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
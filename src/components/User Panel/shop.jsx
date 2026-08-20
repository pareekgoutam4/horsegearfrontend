import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Nav from "../User Panel/nav";
import Footer from "../User Panel/footerbanner";
import { isLoggedIn, requireLogin } from "../../utils/auth";


function Shop() {
  const [productslist, setproductslist] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();
  const navigate = useNavigate();

  
  async function Getproduct() {
    const apiurl = await fetch("https://horsegearbackend.onrender.com/product/getproduct");
    const result = await apiurl.json();
    setproductslist(result);
    setLoading(false);
  }

  useEffect(() => {
    Getproduct();
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, []);

  if (loading) {
    return (
      <>
        <Nav />
        <div className="shop-loading-state">
          Loading Shop Items...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
   
      <Nav />

     
      <div className="shop-hero-banner-container">
        <div className="shop-hero-banner-content">
          <h1 className="shop-page-main-title">OUR SHOP</h1>
          <div className="shop-banner-divider"></div>
          <p className="shop-breadcrumb-links">
            <Link to="/">HOME</Link> <span>/</span> SHOP
          </p>
        </div>
      </div>


      <main className="shop-main-content-area">
        <section className="featured-products-section">
          <div className="products-grid">
            {productslist.length === 0 ? (
              <p className="no-products">No Products Found in Database.</p>
            ) : (
              productslist.map((product) => (
                
               
                <Link to={`/product/${product._id}`} key={product._id} className="product-card-clickable-wrapper">
                  <div className="product-card">
                    
                    <div className="product-image-box">
                      <img src={product.image} alt={product.title} className="product-img" />
                      
                      <div className="product-hover-overlay">
                        <div className="quick-actions">
                          <button className="action-circle-btn" title="Quick View"onClick={(e) => { e.preventDefault(); alert("Quick View: " + product.title); }}>👁</button>
                          <button className="action-circle-btn" title="Add to Wishlist"onClick={(e) => { e.preventDefault(); alert("Added to Wishlist!"); }}>❤️</button>
                        </div>
                        
                        <button 
                          className="add-to-cart-btn"
                          onClick={(e) => { 
                            e.preventDefault(); 

                            if (!isLoggedIn()) {
                              requireLogin(navigate, "/shop");
                              return;
                            }

                            addItem({ 
                              id: product._id, 
                              title: product.title, 
                              price: product.price, 
                              image: product.image 
                            });
                            alert("Product Added to Cart!"); 
                          }}>ADD TO CART</button>
                      </div>
                    </div>

                    <div className="product-info">
                      <span className="product-category">{product.category}</span>
                      <h3 className="product-title">{product.title}</h3>
                      <span className="product-price">
                        £{product.price ? product.price.toLocaleString('en-GB', { minimumFractionDigits: 2 }) : "0.00"}
                      </span>
                      
                      {product.rating > 0 && (
                        <div className="product-stars">
                          {[...Array(product.rating)].map((_, i) => (
                            <span key={i} className="star-icon">★</span>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </main>

     
      <Footer />
    </>
  );
}

export default Shop;
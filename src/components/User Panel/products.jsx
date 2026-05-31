import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart"; 

function Products() {
  const [productslist, setproductslist] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const { addItem } = useCart();

  async function Getproduct(e) {
    const apiurl = await fetch("https://horsegearbackend.onrender.com/product/getproduct")
    const result = await apiurl.json()
    setproductslist(result)
    setLoading(false); 
  }

  useEffect(() => {
    Getproduct();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px', fontWeight: 'bold' }}>Loading Products...</div>;
  }

  return (
    <>
      <section className="featured-products-section">
        <div className="products-header">
          <h2 className="products-main-title">FEATURED PRODUCTS</h2>
          <div className="products-divider"></div>
        </div>

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
                      
                        <button className="action-circle-btn" title="Quick View"onClick={(e) => { e.preventDefault(); alert("Quick View: " + product.title); }}>
                          👁
                        </button>
                        <button className="action-circle-btn" title="Add to Wishlist"onClick={(e) => { e.preventDefault(); alert("Added to Wishlist!"); }}>❤️</button>
                      </div>
                      
              
                      <button className="add-to-cart-btn" onClick={(e) => { 
                          e.preventDefault();
                          
                     
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
    </>
  );
}

export default Products;
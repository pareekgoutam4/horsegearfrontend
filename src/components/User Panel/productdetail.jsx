import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Nav from "../User Panel/nav";
import Footer from "../User Panel/footerbanner";


function Productdetail() {
  const { id } = useParams();
  const [productslist, setproductslist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState("");

  
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

  const product = productslist.find((item) => item._id === id);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id, product]);

  if (loading) {
    return <div className="detail-loading">Loading Product Details...</div>;
  }

  if (!product) {
    return (
      <>
        <Nav />
        <div className="detail-error-box">
          <h2>Product Not Found!</h2>
          <Link to="/" className="back-shop-btn">Back To Shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = productslist
    .filter((item) => item.category === product.category && item._id !== product._id)
    .slice(0, 4);

  const productGallery = [
    product.image,
    "https://horse.oceanwp.org/wp-content/uploads/2016/08/selle-bates-victrix-cair-600x600.png",
    "https://horse.oceanwp.org/wp-content/uploads/2016/08/selle-wintec-lite-d-lux-cair-har-2.png",
    "https://horse.oceanwp.org/wp-content/uploads/2016/08/selle-wintec-2000-cair-hart-mixt-600x600.png"
  ];

  return (
    <>
      <Nav />

      <main className="product-detail-container">
        <div className="detail-layout-grid">
          
        
          <div className="gallery-container-block">
            <div className="detail-image-wrapper">
              <img src={mainImage} alt={product.title} className="detail-main-img" />
            </div>
            
            <div className="thumbnails-grid-row">
              {productGallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className={`thumbnail-box ${mainImage === imgUrl ? "active-thumb" : ""}`}
                  onClick={() => setMainImage(imgUrl)}
                  onMouseEnter={() => setMainImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`preview-${index}`} />
                </div>
              ))}
            </div>
          </div>

          
          <div className="detail-info-wrapper">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.title}</h1>
            
            {product.rating > 0 && (
              <div className="detail-rating-stars">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="rating-text">({product.rating} Customer Reviews)</span>
              </div>
            )}

            <div className="detail-price-box">
              £{product.price ? product.price.toLocaleString('en-GB', { minimumFractionDigits: 2 }) : "0.00"}
            </div>

            <p className="detail-description">
              Experience unparalleled quality and performance with this professional equestrian gear. 
              Designed with meticulous attention to detail, it ensures optimal comfort for both horse 
              and rider during high-intensity training or casual riding.
            </p>

            <ul className="product-highlights-list">
              <li>✨ Crafted from ultra-durable, premium-grade materials</li>
              <li>🛡️ Ergonomic structure engineered for maximum security and support</li>
              <li>💨 Lightweight and fully breathable design for extended use</li>
            </ul>

           
            <div className="purchase-actions-row">
              <div className="quantity-counter">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              
            
              <button className="detail-add-cart-btn"onClick={() => {
                  addItem({
                    id: product._id,
                    title: product.title,
                    price: product.price,
                    image: product.image
                  }, quantity); 
                  alert(`${quantity} Item(s) Added to Cart!`);
                }}>ADD TO CART</button>
            </div>

         
            <div className="trust-badges-container">
              <div className="badge-item">
                <span className="badge-icon">🚚</span>
                <p>Free UK Delivery</p>
              </div>
              <div className="badge-item">
                <span className="badge-icon">🔒</span>
                <p>Secure Checkout</p>
              </div>
              <div className="badge-item">
                <span className="badge-icon">🔄</span>
                <p>30-Day Returns</p>
              </div>
            </div>

            
            <div className="detail-footer-meta">
              <p><span>SKU:</span> PROD-{product._id.slice(-6).toUpperCase()}</p>
              <p><span>Category:</span> {product.category.toUpperCase()}</p>
              <p><span>Tags:</span> Horse Riding, Premium Equipment</p>
            </div>
          </div>
        </div>

       
        <div className="product-details-tabs-section">
          <div className="tabs-header-buttons">
            <button className={`tab-btn ${activeTab === "description" ? "active" : ""}`}onClick={() => setActiveTab("description")}>Description</button>
            <button className={`tab-btn ${activeTab === "info" ? "active" : ""}`}onClick={() => setActiveTab("info")}>Additional Info</button>
          </div>

          <div className="tab-content-display">
            {activeTab === "description" ? (
              <div className="tab-pane-text">
                <p>Our equestrian collection blends timeless craftsmanship with advanced sporting ergonomics. This product has undergone rigorous quality testing to sustain extreme pressure while offering a smooth, frictionless interaction. Ideal for advanced professionals and passionate horse riding enthusiasts alike.</p>
              </div>
            ) : (
              <div className="tab-pane-text">
                <table className="specification-table">
                  <tbody>
                    <tr>
                      <td>Material</td>
                      <td>Full Grain Leather / Reinforced Composite Premium Core</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>Standard Lightweight Aerodynamic Fit</td>
                    </tr>
                    <tr>
                      <td>Care Instructions</td>
                      <td>Wipe with professional leather cleaner / Keep in dry storage</td>
                    </tr>
                    <tr>
                      <td>Suitability</td>
                      <td>Unisex Professional/All-Weather Performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="related-products-section">
          <h2 className="related-section-title">You May Also Like</h2>
          <div className="related-title-divider"></div>
          
          <div className="related-products-grid">
            {relatedProducts.length === 0 ? (
              <p className="no-related">No similar items found in this category.</p>
            ) : (
              relatedProducts.map((item) => (
                <Link to={`/product/${item._id}`} key={item._id} className="related-product-card-link">
                  <div className="related-product-card">
                    <div className="related-img-box">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="related-info-box">
                      <span className="related-cat">{item.category}</span>
                      <h4 className="related-title">{item.title}</h4>
                      <span className="related-price">£{item.price ? item.price.toLocaleString('en-GB', { minimumFractionDigits: 2 }) : "0.00"}</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

export default Productdetail;
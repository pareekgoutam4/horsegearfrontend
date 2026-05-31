import React from "react";



const rocketIcon = "https://img.icons8.com/ios/100/ffffff/rocket--v1.png";
const returnIcon = "https://cdn-icons-png.flaticon.com/128/18858/18858295.png";
const tagIcon = "https://img.icons8.com/ios/100/ffffff/price-tag.png";
const supportIcon = "https://img.icons8.com/ios/100/ffffff/headset.png";

function Footer() {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-overlay">
        
     
        <div className="footer-features-row">
          
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src={rocketIcon} alt="Free Shipping" className="footer-vector-icon" />
            </div>
            <div className="feature-text">
              <h4>FREE SHIPPING</h4>
              <p>orders $50 or more</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src={returnIcon} alt="Free Returns" className="footer-vector-icon" />
            </div>
            <div className="feature-text">
              <h4>FREE RETURNS</h4>
              <p>within 30 days</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src={tagIcon} alt="Get Discount" className="footer-vector-icon" />
            </div>
            <div className="feature-text">
              <h4>GET 20% OFF 1 ITEM</h4>
              <p>When you sign up</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src={supportIcon} alt="We Support" className="footer-vector-icon" />
            </div>
            <div className="feature-text">
              <h4>WE SUPPORT</h4>
              <p>24/7 amazing services</p>
            </div>
          </div>

        </div>

        <div className="footer-separator"></div>

    
        <div className="footer-middle-row">
          <div className="footer-left-block">
            <div className="contact-meta">
              <span className="meta-info">📞 (+91) 8209216067</span>
              <span className="meta-info">📩 pareekgoutam@gmail.com</span>
            </div>
            <p className="footer-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

       
          <div className="footer-social-block">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn instagram-color">
              <img src="https://img.icons8.com/ios-glyphs/60/ffffff/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn facebook-color">
              <img src="https://img.icons8.com/ios-glyphs/60/ffffff/facebook-f.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn twitter-color">
              <img src="https://img.icons8.com/ios-glyphs/60/ffffff/twitter--v1.png" alt="Twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn youtube-color">
              <img src="https://img.icons8.com/ios-glyphs/60/ffffff/youtube-play.png" alt="YouTube" />
            </a>
          </div>
        </div>

       
        <div className="footer-bottom-bar">
          <p>© Copyright — Gautam Pareek</p>
        </div>

      </div>
    </footer>
    </>
  );
}

export default Footer;
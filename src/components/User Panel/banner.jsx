import React from "react";
import { Link } from "react-router-dom";


function Banner() {
  return (
    <>
      <div className="hero-banner">

        <div className="banner-overlay"></div>

        <div className="banner-content">
          <h1 className="banner-title">THE HORSE EMPIRE</h1>

          <p className="banner-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>


          <div className="banner-divider">
            <span>///////////////////////////</span>
          </div>
          <Link to="/shop">
            <button className="banner-btn">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
import React from "react";
import { Link } from "react-router-dom";


function Readyride() {
  return (

    <>
    <section className="ready-ride-section">
 
      <div className="ready-ride-overlay">
        <div className="ready-ride-content">
          
        
          <h2 className="ride-title">READY FOR A RIDE?</h2>
          
         
          <p className="ride-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="ride-divider"></div>
          
     <Link to="/shop">
          <button className="discover-btn" onClick={() => alert("Products Coming Soon!")}>
            DISCOVER OUR PRODUCTS
          </button>
          </Link>
          
        </div>
      </div>
    </section>
    </>
  );
}

export default Readyride;
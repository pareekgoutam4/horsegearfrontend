import React from "react";


function Ourbrands() {
 
  const brands = [
    { id: 1, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b1.png", altText: "Design Premium Quality" },
    { id: 2, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b2.png", altText: "Original Vintage Label" },
    { id: 3, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b3.png", altText: "Premium Quality Original Brand" },
    { id: 4, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b4.png", altText: "Original 100% Brand" },
    { id: 5, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b5.png", altText: "Original Brand Est.1836" },
    { id: 6, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b6.png", altText: "1st Class Stars" },
    { id: 7, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b7.png", altText: "1st Class Premium Quality" },
    { id: 8, logoUrl: "https://horse.oceanwp.org/wp-content/uploads/2021/04/b8.png", altText: "Retro Logo Established 1986" },
  ];

  return (

    <>
    <section className="brands-section">
   
      <h2 className="brands-title">OUR BRANDS</h2>
      
  
      <div className="brands-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logoUrl}  alt={brand.altText} className="brand-logo" />
          </div>
        ))}
      </div>
    </section>

    </>
  );
}

export default Ourbrands;
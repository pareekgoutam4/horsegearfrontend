import React from "react";


function Whychoose() {
 
  const features = [
    {
      id: 1,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/32/32904.png", 
      title: "MAECENAS MASSA LOREM",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 2,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/33/33348.png",
      title: "MAECENAS MASSA LOREM",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 3,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/32/32896.png", 
      title: "MAECENAS MASSA LOREM",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 4,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/35/35983.png",
      title: "MAECENAS MASSA LOREM",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 5,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/32/32860.png",
      title: "MAECENAS MASSA LOREM",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 6,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/33/33809.png",
      title: "MAECENAS MASSA LOREM",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (

    <>
    <section className="choose-us-section">
   
      <div className="section-header">
        <h2 className="section-main-title">WHY CHOOSE US?</h2>
        <div className="title-divider"></div> 
      </div>

      
      <div className="features-grid">
        {features.map((item) => (
          <div key={item.id} className="feature-card">
       
            <div className="icon-circle">
              <img src={item.iconUrl} alt="Horse Icon" className="feature-icon" />
            </div>
            
         
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Whychoose;
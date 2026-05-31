import React from "react";

function Learnmore() {
  const cardsData = [
    {
      id: 1,
      className: "card-img-lessons",
      title: "Horse Lessons",
      description: "Adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 2,
      className: "card-img-jumping",
      title: "Show Jumping",
      description: "Adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 3,
      className: "card-img-children",
      title: "For Childrens",
      description: "Adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (

    <>
    <section className="services-container">
      <div className="cards-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="service-card">
         
            <div className={`card-image ${card.className}`}></div>
            
          
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <a href="#learn-more" className="learn-more-btn">
                LEARN MORE <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    </>
  );
}

export default Learnmore;
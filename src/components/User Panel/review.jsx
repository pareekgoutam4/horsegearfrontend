import React from "react";


function Review() {
 
  const testimonials = [
    {
      id: 1,
      text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg", 
      name: "GAEL LUDWIG",
      stars: 5,
    },
    {
      id: 2,
      text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "SOFIA MILLER",
      stars: 5,
    },
    {
      id: 3,
      text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "MIKE KENLI",
      stars: 4, 
    },
    {
      id: 4,
      text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "LOLA MILES",
      stars: 5,
    },
  ];

  return (
    <>
    <section className="testimonials-section">
    
      <div className="testimonials-header">
        <h2 className="testimonials-main-title">TESTIMONIALS</h2>
        <div className="testimonials-divider"></div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            
          
            <div className="quote-mark">“</div>
            
       
            <p className="testimonial-text">{item.text}</p>
            
            <div className="user-profile">
              <img src={item.avatar} alt={item.name} className="user-avatar" />
              <h3 className="user-name">{item.name}</h3>
            </div>
            
        
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <span key={index} className={`star ${currentRating <= item.stars ? "filled-star" : "empty-star"}`}>★</span>
                );
              })}
            </div>

          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Review;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



function Latestnews() {
  const newsData = [
    {
      id: 1,
      imgUrl: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0010_shutterstock_362034347-1-600x417.png", 
      title: "Duis Sagittis Ipsum Praesent",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus...",
    },
    {
      id: 2,
      imgUrl: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0011_shutterstock_81307438-1-600x417.png",
      title: "Tortor Neque Adipiscing Diam",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus...",
    },
    {
      id: 3,
      imgUrl: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0009_shutterstock_712677400-1-600x417.png",
      title: "Vestibulum Sapien Prin Quam",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus...",
    },
    
    {
      id: 4,
      imgUrl: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0007_shutterstock_1114321121-1-600x417.png", 
      title: "Magna Aliquam Erat Volutpat",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus...",
    },
    {
      id: 5,
      imgUrl: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0008_shutterstock_741421162-1-600x417.png",
      title: "Phasellus Ultrices Fusce",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus...",
    },
    {
      id: 6,
      imgUrl: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0006_shutterstock_1175510683-1-600x417.png",
      title: "Egestas Elementum Semper",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus...",
    },
  ];

  return (
    <>
    <section className="latest-news-section">
      <div className="news-header">
        <h2 className="news-main-title">LATEST NEWS</h2>
        <div className="news-divider"></div>
      </div>

     
      <div className="slider-outer-wrapper">
        
       
        <button className="custom-swiper-button-prev">‹</button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, slidesGroup: 1, spaceBetween: 10 },
            700: { slidesPerView: 2, slidesGroup: 2, spaceBetween: 20 },
            1100: { slidesPerView: 3, slidesGroup: 3, spaceBetween: 30 },
          }}
          className="news-swiper"
        >
          {newsData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="news-card">
                <div className="news-img-box">
                  <img src={slide.imgUrl} alt={slide.title} className="news-image" />
                </div>
                <div className="news-content">
                  <h3 className="news-card-title">{slide.title}</h3>
                  <p className="news-card-desc">{slide.desc}</p>
                  <a href="#read-more" className="news-learn-more">LEARN MORE</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-swiper-button-next">›</button>
        
      </div>
    </section>
    </>
  );
}

export default Latestnews;
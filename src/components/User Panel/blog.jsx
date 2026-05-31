import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../User Panel/nav";
import Footer from "../User Panel/footerbanner";


function Blog() {
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const blogsList = [
    {
      id: 1,
      title: "Duis sagitis ipsum prasent",
      category: "Tips",
      comments: 0,
      image: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0010_shutterstock_362034347-1-600x417.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 2,
      title: "Tortor neque adpisceing diam",
      category: "Tips",
      comments: 0,
      image: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0011_shutterstock_81307438-1-600x417.png", // Screenshot jaisa rider and horse shot
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 3,
      title: "Premium equestrian gear tips",
      category: "Riding",
      comments: 2,
      image: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0009_shutterstock_712677400-1-600x417.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 4,
      title: "How to choose a perfect saddle",
      category: "Equipment",
      comments: 5,
      image: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0008_shutterstock_741421162-1-600x417.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 5,
      title: "Understanding your horse health",
      category: "Care",
      comments: 1,
      image: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0007_shutterstock_1114321121-1-600x417.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 6,
      title: "Stable management checklist",
      category: "Tips",
      comments: 0,
      image: "https://horse.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0006_shutterstock_1175510683-1-600x417.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    }
  ];

  return (
    <>
     
      <Nav />

      <div className="blog-hero-banner-container">
        <div className="blog-hero-banner-content">
          <h1 className="blog-page-main-title">OUR BLOG</h1>
          <div className="blog-banner-divider"></div>
          <p className="blog-breadcrumb-links">
            <Link to="/">HOME</Link> <span>/</span> BLOG
          </p>
        </div>
      </div>

      <main className="blog-main-content-area">
        <section className="blog-cards-section-grid">
          {blogsList.map((blog) => (
            <div key={blog.id} className="blog-card-item">
           
              <div className="blog-image-frame">
                <img src={blog.image} alt={blog.title} className="blog-img" />
                <div className="blog-image-hover-tint"></div>
              </div>

        
              <div className="blog-content-info">
                <h2 className="blog-card-title">{blog.title}</h2>
                
             
                <div className="blog-meta-tags-row">
                  <span className="meta-item">
                    <i className="fa-regular fa-folder"></i> {blog.category}
                  </span>
                  <span className="meta-divider">-</span>
                  <span className="meta-item">
                    <i className="fa-regular fa-comment"></i> {blog.comments} Comments
                  </span>
                </div>

                <p className="blog-card-description">{blog.desc}</p>
                
               
              </div>

            </div>
          ))}
        </section>
      </main>

     
      <Footer />
    </>
  );
}

export default Blog;
import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import Nav from "../User Panel/nav";
import Banner from "../User Panel/banner";
import Learnmore from "../User Panel/learnmore";
import Products from "../User Panel/products";
import Ourbrands from "../User Panel/ourbrand";
import Whychoose from "../User Panel/whychoose";
import Readyride from "../User Panel/readyride";
import Review from "../User Panel/review";
import Latestnews from "../User Panel/latestnews";
import Footer from "../User Panel/footerbanner";

function Home() {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("user");

  useEffect(() => {
 
    if (!loggedInUser) {
      alert("Please login first to access this page!");
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null; 
  }

  return (
    <>
      <Nav />
      <Banner />
      <Learnmore />
      <Products />
      <Ourbrands />
      <Whychoose />
      <Readyride />
      <Review />
      <Latestnews />
      <Footer />
    </>
  );
}

export default Home;
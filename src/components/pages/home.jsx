import React from "react"; 
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
  // Home is public now — anyone can browse it without logging in.
  // Login is only required when the user tries to buy something.

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
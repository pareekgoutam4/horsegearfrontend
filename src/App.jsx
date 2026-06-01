import React from 'react'


import Home from './components/pages/home'



import './App.css'

import { HashRouter, Routes, Route, HashRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Productdetail from './components/User Panel/productdetail';
import Cart from './components/User Panel/cart';
import Shop from './components/User Panel/shop';
import Blog from './components/User Panel/blog';
import Contact from './components/User Panel/contact';
import Signup from './components/User Panel/signup';
import Login from './components/User Panel/login';
import Dashboard from './components/Admin Panel/dashboard';
import Customer from './components/Admin Panel/customer';
import Fetch from './components/Admin Panel/productfetch';


function App() {


  return (
    <>
    <CartProvider>

       <HashRouter>
      <Routes>



        <Route path = "/" element = {<Signup/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/product/:id" element = {<Productdetail/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = "/blog" element = {<Blog/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/admin/dashboard" element = {<Dashboard/>}/>
        <Route path = "/customers" element = {<Customer/>}/>
        <Route path = "/adminproducts" element = {<Fetch/>}/>
       
      </Routes>
      </HashRouter>
      
    </CartProvider>
  
     
    </>
  )
}

export default App

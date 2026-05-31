import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Nav from "../User Panel/nav";
import Footer from "../User Panel/footerbanner";


function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      <Nav />
      
      <div className="cart-page-container">
        <h1 className="cart-page-title">Shopping Cart</h1>
        <div className="cart-title-divider"></div>

        {isEmpty ? (
       
          <div className="empty-cart-view">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is currently empty.</h2>
            <p>Add premium equestrian gear to your collection before checking out.</p>
            <Link to="/" className="return-shop-btn">Return To Shop</Link>
          </div>
        ) : (
       
          <div className="cart-workspace-grid">
            
          
            <div className="cart-items-table-wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                    
                      <td className="table-product-cell">
                        <img src={item.image} alt={item.title} className="cart-item-thumb" />
                        <span className="cart-item-title">{item.title}</span>
                      </td>
                   
                      <td className="cart-table-price">£{item.price.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</td>
                 
                      <td>
                        <div className="cart-quantity-box">
                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                    
                      <td className="cart-table-subtotal">£{(item.price * item.quantity).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</td>
                  
                      <td>
                        <button className="cart-delete-btn" onClick={() => removeItem(item.id)}>×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

             
              <div className="cart-table-actions-row">
                <Link to="/" className="continue-shopping-btn">← Continue Shopping</Link>
                <button className="clear-cart-full-btn" onClick={() => emptyCart()}>Clear Shopping Cart</button>
              </div>
            </div>

     
            <div className="cart-totals-summary-card">
              <h3>Cart Totals</h3>
              <div className="totals-row-item">
                <span>Subtotal</span>
                <span className="totals-bold-text">£{cartTotal.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="totals-row-item">
                <span>Shipping</span>
                <span className="shipping-text-badge">{cartTotal >= 100 ? "FREE" : "£10.00"}</span>
              </div>
              <div className="totals-row-divider"></div>
              <div className="totals-row-item final-checkout-total">
                <span>Total</span>
                <span className="grand-total-price-text"> £{(cartTotal >= 100 ? cartTotal : cartTotal + 10).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span>
              </div>
              <button className="proceed-checkout-btn" onClick={() => alert("Proceeding to premium checkout framework!")}> Proceed To Checkout </button>
            </div>

          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
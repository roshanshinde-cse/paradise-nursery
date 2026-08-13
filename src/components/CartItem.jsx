import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Paradise Nursery</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )})
          </Link>
        </div>
      </nav>

      {/* Shopping Cart */}
      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (

              <div className="cart-item" key={item.id}>

                {/* Plant Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                {/* Plant Information */}
                <div className="cart-item-details">

                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ${item.price}
                  </p>

                  <p>
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                </div>

                {/* Quantity Controls */}
                <div className="quantity-controls">

                  <button
                    onClick={() => handleDecrease(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>

                </div>

                {/* Delete Button */}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>

              </div>

            ))}

            {/* Cart Summary */}
            <div className="cart-summary">

              <h2>
                Total Amount: ${totalAmount.toFixed(2)}
              </h2>

              {/* Checkout */}
              <button
                className="checkout-button"
                onClick={() =>
                  alert("Coming Soon")
                }
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link to="/plants">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </Link>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default CartItem;

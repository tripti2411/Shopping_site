// ProductItem.js
import React from "react";

const ProductItem = ({ product }) => {
  const { title, description, price, image } = product;
  const handleBuyClick = () => {
    // Implement the functionality when the "Buy" button is clicked
    // For example, you can redirect the user to a checkout page or handle the purchase.
    alert(`You have bought ${title}`);
  };

  const handleAddToCartClick = () => {
    // Implement the functionality to add the product to the cart
    // You can use state management or a shopping cart context here.
    alert(`Added ${title} to your cart`);
  };

  return (
    <div className="product-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div className="buttons">
        <button onClick={handleBuyClick} className="buy-button">
          Buy
        </button>
        <button onClick={handleAddToCartClick} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

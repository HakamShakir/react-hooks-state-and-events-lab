import { useState } from "react";
import react from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("false");
  const [cartButton, setCartButton] = useState("Add to Cart");

  function addToCart() {
    setCart((cart) => !cart);
  }

  function handleCartButton() {
    setCartButton("Remove From Cart");
  }

  function cartFunctions() {
    addToCart();
    handleCartButton();
  }
  return (
    <li className={cart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartFunctions}>
        {cartButton}
      </button>
    </li>
  );
}

export default Item;

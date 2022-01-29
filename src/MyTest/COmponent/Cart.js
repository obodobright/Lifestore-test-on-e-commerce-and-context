import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";
import { CardCart } from "./CardCart";
export const Cart = () => {
  const { cart, dispatch, quantity } = useContext(ProductContext);
  const [amount, setAmount] = useState(0);

  // console.log(quantity);
  const incrementItem = (item, index) => {
    const items = amount;
    item.quantity = +1;
    items.splice(index, 1, item);
    setAmount(items);
  };

  const MinusQuantity = (id) => {
    dispatch({
      type: "DECREMENT_PRODUCT",
      // payload: quantity,
    });
    console.log(id, "-1");
    setAmount((prevValue) => prevValue - 1);
  };
  return (
    <div className="cart-container">
      <h2>{`Cart (${cart?.length})`}</h2>
      {cart?.length === 0 && <p>You have no product in your cart</p>}
      {cart?.map((product, index) => (
        <CardCart
          name={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
          addProduct={incrementItem}
          minusProduct={MinusQuantity}
          index={index}
          productQuantity={product.quantity}
          all={product}
        />
      ))}
    </div>
  );
};

import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";
import { CardCart } from "./CardCart";
import RemoveModal from "../Modal/RemoveModal";

export const Cart = () => {
  const { cart, dispatch, quantity } = useContext(ProductContext);
  const [myCart, setMyCart] = useState(cart);
  const [showModal, setShowModal] = useState(false);

  // css style for modal button

  // Delete product from cart
  const deleteCartProduct = (id) => {
    const index = myCart.findIndex((prod) => prod.index === id); //use id instead of index
    if (index > -1) {
      //make sure you found it
      setMyCart((prevState) => prevState.splice(index, 1));
    }

    setShowModal(false);
  };
  // Delete Modal
  const toggleDeleteModal = () => {
    setShowModal(!showModal);
  };
  // Increment cart Item
  const incrementItem = (id) => {
    setMyCart(
      myCart?.map((product) =>
        id === product.index ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  // Decrement Cart Item
  const MinusQuantity = (id) => {
    setMyCart(
      myCart?.map((product) =>
        id === product.index ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };
  return (
    <div className="cart-container">
      <h2>{`Cart (${myCart?.length})`}</h2>
      {myCart?.length === 0 && <p>You have no product in your cart</p>}
      {myCart?.map((product, index) => (
        <CardCart
          name={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
          addProduct={incrementItem}
          minusProduct={MinusQuantity}
          index={index}
          id={product.index}
          productQuantity={product.quantity}
          deleteProduct={deleteCartProduct}
          openModal={showModal}
        />
      ))}
    </div>
  );
};

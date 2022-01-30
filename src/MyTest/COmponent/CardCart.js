import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";
import RemoveModal from "../Modal/RemoveModal";

export const CardCart = ({
  name,
  description,
  image,
  price,
  addProduct,
  minusProduct,
  index,
  productQuantity,
  id,
  deleteProduct,
  openModal,
}) => {
  const { cart, dispatch, quantity } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const toggleDeleteModal = () => {
    setShowModal(!showModal);
  };
  const btnStyle = {
    outline: "none",
    margin: "0 10px",
    padding: "5px 10px",
    cursor: "pointer",
  };

  // console.log(quantity);
  return (
    <>
      <div className="cart-card" key={index}>
        <img src={image} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <h4>{price}</h4>
          <p>{price * productQuantity}</p>
          <div className="cart-info">
            <div className="remove-btn" onClick={toggleDeleteModal}>
              Remove
            </div>
            <div className="product-btn">
              {productQuantity === 0 ? (
                <button disabled>-</button>
              ) : (
                <button onClick={() => minusProduct(id)}>-</button>
              )}
              <span>{productQuantity}</span>
              <button onClick={() => addProduct(id)}>+</button>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <RemoveModal hideShowModal={() => setShowModal(false)}>
          <div>Do you want to remove product from cart</div>
          <div style={{ margin: "10px 0" }}>
            <button style={btnStyle} onClick={() => setShowModal(false)}>
              Cancel
            </button>
            <button style={btnStyle} onClick={() => deleteProduct(id)}>
              Remove
            </button>
          </div>
        </RemoveModal>
      ) : null}
    </>
  );
};
//  remove(id){
//       console.log('remove', id);
//     this.setState(prevState => ({
//        items: prevState.items.filter(item => item.id !== id)
//     }));
//   }

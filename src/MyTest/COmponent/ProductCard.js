import React, { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import { data } from "../data/data";
import { ProductContext } from "../context/ProductProvider";
import { useHistory } from "react-router-dom";

export const ProductCard = ({ name, description, sku, price, image, id }) => {
  const { cart } = useContext(ProductContext);
  console.log(cart);
  const [showModal, setShowModal] = useState(false);
  const [cartAdd, setCartAdd] = useState(false);
  const productDetail = data[id];
  const history = useHistory();

  const addCart = (product) => {
    cart.push(product);
    console.log(cart);
    localStorage.setItem("cartProduct", JSON.stringify(product));
    setCartAdd(true);
    // window.location.reload();
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-info">
        <h4 className="product-name">{name}</h4>
        {/* <p className="product-desc">{description}</p> */}
        <div className="card-footer">
          <h4>₦{price}</h4>
          <p>{sku}</p>
        </div>
        <button className="btn-add" onClick={() => setShowModal(!showModal)}>
          Add to Cart
        </button>
      </div>
      {showModal && (
        <Modal hideShowModal={() => setShowModal(false)}>
          <div className="product-detail-container">
            <img src={productDetail.image} alt="" className="detail-img" />
            <div className="details-info">
              <h3>{productDetail.name}</h3>
              <p className="detail-desc">{productDetail.description}</p>
              <div className="detail-footer">
                <h4>{`₦ ${productDetail.price}`}</h4>
                <p>{`Sku: ${productDetail.price}`}</p>
              </div>
              {cartAdd ? (
                <button className="modal-btn-add" disabled>
                  Added to cart
                </button>
              ) : (
                <button className="modal-btn-add" onClick={() => addCart(productDetail)}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

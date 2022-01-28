import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { data } from "../data/data";

export const ProductCard = ({ name, description, sku, price, image, id }) => {
  const addCart = (id) => {
    console.log("cart added", id);
  };
  const [showModal, setShowModal] = useState(false);
  const productDetail = data[id];

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
          {/* <Link to={`/productdetail/${id}`} >Add to Cart</Link> */}
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
              <div>
                <h4>{`₦ ${productDetail.price}`}</h4>
                <p>{`Sku: ${productDetail.price}`}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

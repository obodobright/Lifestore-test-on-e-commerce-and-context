import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";
import RemoveModal from "../Modal/RemoveModal";
import "../styles/style.css";
import { ImBin2 } from "react-icons/im";

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
      <div className="table" style={{ overflowX: "auto" }} key={index}>
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                {" "}
                <img src={image} alt="" />
              </td>
              <td>
                <h2>{name}</h2>
              </td>
              <td>
                {" "}
                <p>{description}</p>
              </td>
              <td>
                <h4>₦{price}</h4>
              </td>

              <td>
                <div className="product-btn">
                  {productQuantity === 0 ? (
                    <button disabled>-</button>
                  ) : (
                    <button onClick={() => minusProduct(id)}>-</button>
                  )}
                  <span>{productQuantity}</span>
                  <button onClick={() => addProduct(id)}>+</button>
                </div>
              </td>
              <td>₦{price * productQuantity}</td>
              <td>
                <button className="remove-btn" onClick={toggleDeleteModal}>
                  <ImBin2 />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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

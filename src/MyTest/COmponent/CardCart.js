import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export const CardCart = ({
  name,
  description,
  image,
  price,
  addProduct,
  minusProduct,
  index,
  productQuantity,
  all,
}) => {
  const { cart, dispatch, quantity } = useContext(ProductContext);

  console.log(quantity);
  return (
    <>
      {/* {cart?.map((product, index) => { */}
      {/* const { name, description, price, image } = product; */}
      <div className="cart-card" key={index}>
        <img src={image} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <h4>{price}</h4>
          <div className="cart-info">
            <div className="remove-btn">Remove</div>
            <div className="product-btn">
              {quantity === 0 ? (
                <button disabled>-</button>
              ) : (
                <button onClick={() => minusProduct(index)}>-</button>
              )}
              <span>{productQuantity}</span>
              <button onClick={() => addProduct(all, index)}>+</button>
            </div>
          </div>
        </div>
      </div>
      );
      {/* //   })} */}
    </>
  );
};
//  remove(id){
//       console.log('remove', id);
//     this.setState(prevState => ({
//        items: prevState.items.filter(item => item.id !== id)
//     }));
//   }

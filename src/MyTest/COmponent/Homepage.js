import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import "../styles/style.css";
const HomePage = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="product-container">
      {product?.map((product, i) => {
        const { name, description, sku, price, image } = product;
        // console.log(i);
        return (
          <div key={i}>
            <ProductCard
              id={i}
              name={name}
              description={description}
              sku={sku}
              price={price}
              image={image}
            />
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;

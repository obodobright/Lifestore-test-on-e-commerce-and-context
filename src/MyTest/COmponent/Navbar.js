import React from "react";
import "../styles/style.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export const Navbar = () => {
  const { product } = useContext(ProductContext);
  console.log(product);
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">LIFE STORES</div>
        <div className="nav-item">
          <ul>
            <li>Products</li>
            <li>Carts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

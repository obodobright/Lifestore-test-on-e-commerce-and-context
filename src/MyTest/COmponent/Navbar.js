import React from "react";
import "../styles/style.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";

const Links = {
  textDecoration: "none",
  color: "black",
};
export const Navbar = () => {
  const { product, cart } = useContext(ProductContext);
  console.log(product);
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">LIFE STORES</div>
        <div className="nav-item">
          <ul>
            <li>
              <Link to="/" style={Links}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" style={Links}>
                Carts <sup>{cart.length + 1 ? cart.length : ""}</sup>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "../styles/style.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import { BsFillCartFill } from "react-icons/bs";

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
            <Link to="/" style={Links}>
              <li>
                <span className="icon">
                  <RiHomeSmileFill />
                </span>{" "}
                <span className="no-icon">Products</span>
              </li>
            </Link>

            <Link to="/cart" style={Links}>
              <li>
                <span className="icon">
                  <BsFillCartFill />
                </span>{" "}
                <span className="no-icon"> Carts</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

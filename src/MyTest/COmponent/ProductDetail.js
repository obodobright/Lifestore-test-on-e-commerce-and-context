import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

export const ProductDetail = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(product[id]);
  });
  return <div>Product details</div>;
};

import React, { createContext, useReducer } from "react";
import { data } from "../data/data";
import { ReducerFUnction } from "./ReducerFunction";
export const ProductContext = createContext();
let quantity = 0;
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFUnction, {
    product: data,
    cart: [],
    quantity,
  });
  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>{children}</ProductContext.Provider>
  );
};

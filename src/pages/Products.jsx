import React, { useContext } from "react";
import ProductsPage from "../Components/ProductsPage";
import UserContext from "../Store/UserDetailContext";
import { redirect } from "react-router-dom";

const Products = () => {
  return <ProductsPage />;
};

export default Products;

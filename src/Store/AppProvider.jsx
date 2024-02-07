import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import AppContext from "./AppContext";
import reducer from "../Reducer/ProductReducer";

const API = "https://fakestoreapi.com/products";
const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      let resp = await axios.get(url);
      let singleProduct = await resp.data;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      // console.log(singleProduct, "SINGLE PROD");
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
      console.log(error);
    }
  };

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let resp = await axios.get(url);
      let products = await resp.data;

      dispatch({ type: "API_DATA", payload: products });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  const byPrice = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let resp = await axios.get(url);
      let products = await resp.data;

      // Sort products by price
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);

      dispatch({ type: "API_DATA", payload: sortedProducts });
      console.log(sortedProducts);
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  };
  const byRating = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let resp = await axios.get(url);
      let products = await resp.data;

      const sortedByRating = [...products].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      dispatch({ type: "API_DATA", payload: sortedByRating });
      console.log(sortedByRating);
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  };
  return (
    <AppContext.Provider
      value={{ ...state, getProducts, getSingleProduct, byPrice, byRating }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

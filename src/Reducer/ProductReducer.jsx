import React from "react";

const ProductReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      isError: true,
      isLoading: false,
    };
  }
  if (action.type === "API_DATA") {
    return {
      ...state,
      isLoading: false,
      products: action.payload,
    };
  }
  if (action.type === "SET_SINGLE_LOADING") {
    return {
      ...state,
      isSingleLoading: true,
    };
  }

  if (action.type === "SET_SINGLE_PRODUCT") {
    return {
      ...state,
      isSingleLoading: false,
      singleProduct: action.payload,
    };
  }
  return state;
};

export default ProductReducer;

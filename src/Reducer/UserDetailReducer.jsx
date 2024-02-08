import React from "react";

const UserDetailReducer = (state, action) => {
  if (action.type === "DATA_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "DATA_SUBMITTED") {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === "DATA_ERROR") {
    return {
      ...state,
      isError: true,
    };
  }
  if (action.type === "LOGIN_CONFIRM") {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
      token: action.payload.token,
    };
  }
  return { ...state };
};

export default UserDetailReducer;

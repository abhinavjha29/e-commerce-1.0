import axios from "axios";

import { useContext, createContext, useReducer } from "react";
import UserContext from "./UserDetailContext";
import reducer from "../Reducer/UserDetailReducer";

const UserDetailProvider = (props) => {
  const initialState = {
    isLoading: false,
    isError: false,
    userDetail: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const SubmitFormDetail = async (data) => {
    dispatch({ type: "DATA_LOADING" });
    try {
      const resp = await axios.post(
        "http://localhost:5000/user/register",
        data
      );
      console.log(resp);
      dispatch({ type: "DATA_SUBMITTED" });
    } catch (err) {
      console.log(err);
      dispatch({ type: "DATA_ERROR" });
    }
  };
  const checkLoginDetail = async (data) => {
    dispatch({ type: "DATA_LOADING" });
    try {
      const resp = await axios.post("http://localhost:5000/user/login", data);
      console.log("resp login", resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider
      value={{ ...state, SubmitFormDetail, checkLoginDetail }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserDetailProvider;

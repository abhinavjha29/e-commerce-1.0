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
    dispatch({ type: "Data_LOADING" });
    try {
      const resp = axios.post("http://localhost:5000/user/register", data);
      console.log(resp);
      dispatch({ type: "DATA_SUBMITTED" });
    } catch (err) {
      console.log(err);
      dispatch({ type: "DATA_ERROR" });
    }
  };
  return (
    <UserContext.Provider value={{ ...state, SubmitFormDetail }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserDetailProvider;

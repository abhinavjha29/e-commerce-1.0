import axios from "axios";

import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import UserContext from "./UserDetailContext";
import reducer from "../Reducer/UserDetailReducer";

const UserDetailProvider = (props) => {
  const initialState = {
    isLoading: false,
    isError: false,
    data: {},
    token: "",
  };
  const checkLogin = () => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
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
  const [isLogged, setIsLogged] = useState(false);
  const checkLoginDetail = async (data) => {
    dispatch({ type: "DATA_LOADING" });
    try {
      const resp = await axios.post("http://localhost:5000/user/login", data);
      console.log("resp login", resp.data);
      localStorage.setItem("token", resp.data.token);
      setIsLogged(true);
      dispatch({ type: "LOGIN_CONFIRM", payload: resp.data });
    } catch (err) {
      console.log(err);
    }
    console.log("state +>", state);
  };
  return (
    <UserContext.Provider
      value={{
        ...state,
        SubmitFormDetail,
        checkLoginDetail,
        isLogged,
        setIsLogged,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserDetailProvider;

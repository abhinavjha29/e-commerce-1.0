import React from "react";
import { NavLink } from "react-router-dom";

const LoginBtn = () => {
  return (
    <>
      <NavLink to="/login">
        <button type="button" className="btn btn-outline-light me-2">
          Login
        </button>
      </NavLink>
      <NavLink to="/signup">
        <button type="button" className="btn btn-warning">
          Sign-up
        </button>
      </NavLink>
    </>
  );
};

export default LoginBtn;

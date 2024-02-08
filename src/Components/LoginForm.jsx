import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Store/UserDetailContext";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { checkLoginDetail, data, isLogged } = useContext(UserContext);
  useEffect(() => {
    console.log(isLogged);
    if (isLogged) {
      navigate("/product");
    }
  }, [isLogged, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    await checkLoginDetail(formData);
    console.log(data, "data ios");
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                ref={usernameRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                ref={passwordRef}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

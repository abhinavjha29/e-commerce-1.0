import React, { useContext } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ProductContext from "../Store/ProductContext";
const Header = ({ setSelectedTab }) => {
  // return (
  // <div className={style.header}>
  //   <NavLink to="/">
  //
  //   </NavLink>
  // </div>

  // let totalQuantity = 0;
  // if (product.length > 0) {
  //   product.forEach((item) => {
  //     console.log(item, "item is");
  //     totalQuantity = totalQuantity + item.quantity;
  //   });
  // }
  const { items } = useContext(ProductContext);
  let totalQuantity = 0;
  if (items.length > 0) {
    items.forEach((item) => {
      console.log(item, "item is");
      totalQuantity = totalQuantity + item.quantity;
    });
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img src="./images/mainlogo.png" className={style.logo} />
          </NavLink>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 text-secondary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="nav-link px-2 text-white">
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="nav-link px-2 text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link px-2 text-white">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>

            <NavLink to="/signup">
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </NavLink>
            <button
              type="button"
              className="btn btn-info position-relative m-2"
              // style={{ textAlign: "right" }}
              onClick={() => {
                setSelectedTab("cart");
              }}
            >
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalQuantity}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

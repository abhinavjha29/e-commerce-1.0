import React from "react";
import style from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";

const HomePage = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="mt-5">
        <h2>Special Discounts</h2>
        <p>
          Explore our exclusive discounts on selected products. Limited time
          offers!
        </p>
      </div>
      {/* Carousel */}
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {/* Product 1 */}
          <div className={`carousel-item active`}>
            <img
              src="https://placekitten.com/800/400"
              className={`d-block w-100 ${style.discount_items}`}
              alt="Product 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Product 1</h5>
              <p>Original Price: $100</p>
              <p>Discounted Price: $80</p>
              <NavLink to="/product/1" className="btn btn-primary">
                View Details
              </NavLink>
            </div>
          </div>
          {/* Product 2 */}
          <div className="carousel-item">
            <img
              src="https://placekitten.com/800/401"
              className={`d-block w-100 ${style.discount_items}`}
              alt="Product 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Product 2</h5>
              <p>Original Price: $120</p>
              <p>Discounted Price: $90</p>
              <NavLink to="/product/2" className="btn btn-primary">
                View Details
              </NavLink>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Discount Section */}

      {/* Reasons to Choose */}
      <div className="mt-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div>
                  <TbTruckDelivery />
                </div>
                <h5 className="card-title">Free & Fast Delivery</h5>
                <p className="card-text">
                  We offer free and fast delivery to ensure your products reach
                  you on time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Quality Products</h5>
                <p className="card-text">
                  Discover a wide range of high-quality products at affordable
                  prices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Secure Transactions</h5>
                <p className="card-text">
                  Shop with confidence knowing that your online transactions are
                  secure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">24/7 Customer Support</h5>
                <p className="card-text">
                  Our dedicated customer support team is available 24/7 to
                  assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default HomePage;

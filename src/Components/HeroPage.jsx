import React from "react";
import { NavLink } from "react-router-dom";

const HeroPage = () => {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="./images/heropic.jpg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Discover Endless Possibilities: Your Ultimate Shopping Destination
          </h1>
          <p class="lead">
            Embark on a seamless shopping journey at our e-commerce haven. Dive
            into a curated collection of trending products, from fashion to
            tech, designed to elevate your lifestyle. Uncover unbeatable deals
            and unparalleled convenience for a delightful online shopping
            experience like never before
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <NavLink to="/product">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Products
              </button>
            </NavLink>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              About us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

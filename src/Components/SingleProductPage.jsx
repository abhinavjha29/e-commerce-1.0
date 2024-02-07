import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import style from "./SingleProductPage.module.css";
import AppContext from "../Store/AppContext";
import Review from "./Review";

const SingleProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useContext(AppContext);
  useEffect(() => {
    getSingleProduct(`https://fakestoreapi.com/products/${id}`);
  }, []);
  console.log(singleProduct.rating);

  return (
    <div>
      {isSingleLoading ? (
        <h1>Loading...</h1>
      ) : singleProduct !== undefined ? (
        <div className={`container ${style.singleProductContainer}`}>
          <div className="row">
            <div className="col-md-6">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className={`img-fluid ${style.productImage}`}
              />
            </div>
            <div className="col-md-6">
              <h2 className={style.productTitle}>{singleProduct.title}</h2>
              <p className={style.productPrice}>
                Price: ${singleProduct.price}
              </p>
              <p className={style.productDescription}>
                {singleProduct.description}
              </p>
              <p className={style.productCategory}>
                Category: {singleProduct.category}
              </p>
              {/* <p className={style.productRating}>
                Rating: {singleProduct.rating.rate}
              </p>
              <p className={style.productRatingCount}>
                Rating Count: {singleProduct.rating.count}
              </p> */}
              {singleProduct.rating && (
                <Review
                  star={singleProduct.rating.rate}
                  reviews={singleProduct.rating.count}
                />
              )}
              <button className="btn btn-primary me-2">Add to Cart</button>
              <NavLink to="/product" className="btn btn-primary">
                Back to Products
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProductPage;

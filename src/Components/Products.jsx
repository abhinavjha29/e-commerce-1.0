import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Products.module.css";
import AppContext from "../Store/AppContext";
import FormatPrice from "../Helper/FormatPrice";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import Review from "./Review";
import ProductContext from "../Store/ProductContext";

const ProductsPage = () => {
  const { byPrice, byRating, products, isLoading, getProducts } =
    useContext(AppContext);
  const { addItem } = useContext(ProductContext);
  //console.log(ProductContext);

  useEffect(() => {
    getProducts("https://fakestoreapi.com/products");
  }, []);
  // const onViewDetail = (product, e) => {
  //   // e.preventDefault();
  //   console.log(product);
  //   // getSingleProduct(`https://fakestoreapi.com/products/${product.id}`);
  // };
  const handleLielm = (e) => {
    console.log(e.target.value);
    if (e.target.innerHTML === "Electronics") {
      getProducts("https://fakestoreapi.com/products/category/electronics");
    }
    if (e.target.innerHTML === "Jewelery") {
      getProducts("https://fakestoreapi.com/products/category/jewelery");
    }
    if (e.target.innerHTML === "Men's Clothing") {
      getProducts("https://fakestoreapi.com/products/category/men's clothing");
    }
    if (e.target.innerHTML === "Women's Clothing") {
      getProducts(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
    }
    if (e.target.value === "price") {
      console.log("priceies");
      byPrice("https://fakestoreapi.com/products");
    }
    if (e.target.value === "rating") {
      byRating("https://fakestoreapi.com/products");
    }
  };

  const handleAddTocart_btn = (e, product) => {
    e.preventDefault();
    const quantity = 1;
    addItem({ ...product, quantity });
  };
  const renderProductCard = (product) => (
    <div key={product.id} className={`col-md-4 mb-4 ${styles.productCard}`}>
      <div className={`card h-100 shadow ${styles.productCard}`}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            <FormatPrice price={product.price} />
          </p>
          <p className="card-text">{product.description}</p>

          {/* Rating: {product.rating.rate} ({product.rating.count} reviews) */}
          <Review star={product.rating.rate} reviews={product.rating.count} />

          <div>
            <NavLink to={`/product/${product.id}`}>
              <button className={`btn btn-primary ${styles.viewDetailsBtn}`}>
                View Details
              </button>
            </NavLink>
            <button
              className={`btn btn-danger ${styles.addToCart_btn}`}
              onClick={(e) => {
                handleAddTocart_btn(e, product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Function to render product cards for each row
  const renderProductRows = () => {
    const rows = [];
    if (products) {
      for (let i = 0; i < products.length; i += 3) {
        const row = (
          <div key={i} className="row">
            {products
              .slice(i, i + 3)
              .map((product) => renderProductCard(product))}
          </div>
        );
        rows.push(row);
      }

      return rows;
    }
  };

  return (
    <div className={`container mt-5 ${styles.productsContainer}`}>
      <div className="row">
        <div className="col-md-3">
          <h3 className={`mb-4 ${styles.sectionTitle}`}>Categories</h3>
          <ul className={`list-group mb-4 ${styles.categoryList}`}>
            <li
              className={`list-group-item ${styles.categoryItem}`}
              onClick={(e) => handleLielm(e)}
            >
              Electronics
            </li>
            <li
              className={`list-group-item ${styles.categoryItem}`}
              onClick={(e) => handleLielm(e)}
            >
              Jewelery
            </li>
            <li
              className={`list-group-item ${styles.categoryItem}`}
              onClick={(e) => handleLielm(e)}
            >
              Men's Clothing
            </li>
            <li
              className={`list-group-item ${styles.categoryItem}`}
              onClick={(e) => handleLielm(e)}
            >
              Women's Clothing
            </li>
          </ul>
          <h3 className={`mb-3 ${styles.sectionTitle}`}>Sort By</h3>
          <select
            className={`form-select mb-4 ${styles.sortSelect}`}
            onClick={(e) => handleLielm(e)}
          >
            <option> Select</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="col-md-9">
          <h2 className={`mb-4 ${styles.pageTitle}`}>Products</h2>

          {isLoading === false && renderProductRows()}
          {isLoading === true && <h1>.... LOADING</h1>}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

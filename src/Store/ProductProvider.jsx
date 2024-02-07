import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";

const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);
  let [quantity, setQuantity] = useState(0);
  const addItemtoCart = (item) => {
    console.log(item);
    let isAvail = false;
    let updatedProduct = [...product];
    updatedProduct.forEach((items) => {
      if (items.title === item.title) {
        items.quantity = Number(items.quantity) + 1;
        isAvail = true;
      }
    });
    if (isAvail) {
      setProduct(updatedProduct);
    } else {
      setProduct([...product, item]);
    }
    // const filteredProduct = updatedProduct.filter(
    //   (items) => items.quantity > 0
    // );
    // console.log(filteredProduct, "filter prod is");
    // setProduct(filteredProduct);
  };
  const addQuantity = () => {
    quantity = quantity + 1;
    setQuantity(quantity);
  };
  const subQuantity = (item) => {
    quantity = quantity - 1;
    setQuantity(quantity);
    console.log(item);
    let isAvail = false;
    let updatedProduct = [...product];
    updatedProduct.forEach((items) => {
      if (items.title === item.title) {
        items.quantity = Number(items.quantity) - 1;
        isAvail = true;
      }
    });
    if (isAvail) {
      setProduct(updatedProduct);
    } else {
      setProduct([...product, item]);
    }
    // checkQuantity()
  };
  const removeItemfromCart = (name) => {
    const updatedProduct = product.filter((item) => item.title !== name);
    let quantity = 0;
    updatedProduct.forEach((item) => {
      quantity = quantity + Number(item.quantity);
    });

    setProduct(updatedProduct);
    setQuantity(quantity);
  };
  const totatAmount = () => {};
  // const checkQuantity = (product) => {
  //   let filterProduct = product.filter((elm) => {
  //     elm.quantity > 0;
  //   });
  //   console.log(filterProduct, "filter is ");
  // };
  // console.log(product);

  const itemContext = {
    items: product,
    totalQuantity: quantity,
    addQuantity: addQuantity,
    subQuantity: subQuantity,
    removeItem: removeItemfromCart,
    addItem: addItemtoCart,

    totatAmount: 0,
  };
  return (
    <ProductContext.Provider value={itemContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

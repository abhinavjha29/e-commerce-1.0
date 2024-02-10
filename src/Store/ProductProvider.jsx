import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductProvider = (props) => {
  const token = localStorage.getItem("token");
  let [product, setProduct] = useState([]);
  let [quantity, setQuantity] = useState(0);
  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:5000/cart/getProduct", {
        headers: { Authorization: token },
      });
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(); // Call the fetchData function to initiate the asynchronous operation
  }, []);
  const addItemtoCart = async (item) => {
    try {
      let res = await axios.get("http://localhost:5000/cart/getProduct", {
        headers: { Authorization: token },
      });
      product = res.data;
      let isAvail = false;
      let updatedProduct = [...product];

      console.log("response is ", res.data);

      updatedProduct.forEach(async (items) => {
        if (items.title === item.title) {
          items.quantity = Number(items.quantity) + 1;
          isAvail = true;
          return await axios.patch(
            "http://localhost:5000/cart/updateQuantity",
            { quantity: items.quantity, title: items.title },
            {
              headers: { Authorization: token },
            }
          );
        }
      });
      if (isAvail) {
        setProduct(updatedProduct);
      } else {
        await axios.post("http://localhost:5000/cart/saveProduct", item, {
          headers: { Authorization: token },
        });
        setProduct([...product, item]);
      }
      // const filteredProduct = updatedProduct.filter(
      //   (items) => items.quantity > 0
      // );
      // console.log(filteredProduct, "filter prod is");
      // setProduct(filteredProduct);
    } catch (err) {
      console.log(err);
    }
  };
  const addQuantity = async (title) => {
    quantity = quantity + 1;
    console.log(token, "token is");
    await axios.patch(
      "http://localhost:5000/cart/updateQuantity",
      { quantity: quantity, title: title },
      {
        headers: { Authorization: token },
      }
    );
    setQuantity(quantity);
  };
  const subQuantity = (item) => {
    quantity = quantity - 1;
    setQuantity(quantity);
    console.log(item, "at sub");

    let isAvail = false;
    let updatedProduct = [...product];
    console.log("at sub", updatedProduct);
    updatedProduct.forEach(async (items) => {
      if (items.title === item.title) {
        items.quantity = Number(items.quantity) - 1;
        isAvail = true;
        if (items.quantity < 1) {
          removeItemfromCart(items.id);
        } else {
          await axios.patch(
            "http://localhost:5000/cart/updateQuantity",
            { quantity: items.quantity, title: items.title },
            {
              headers: { Authorization: token },
            }
          );
        }
      }
    });
    if (isAvail) {
      setProduct(updatedProduct);
    } else {
      setProduct([...product, item]);
    }
    // checkQuantity();
  };
  const removeItemfromCart = async (id) => {
    try {
      const updatedProduct = product.filter((item) => item.id !== id);
      let quantity = 0;
      // updatedProduct.forEach((item) => {
      //   quantity = quantity + Number(item.quantity);
      // });
      console.log(token);
      await axios.delete(`http://localhost:5000/cart/deleteProduct/${id}`, {
        headers: { Authorization: token },
      });
      console.log(updatedProduct, "AFTER DFELE");
      setProduct(updatedProduct);
      setQuantity(quantity);
    } catch (error) {
      console.log(error);
    }
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

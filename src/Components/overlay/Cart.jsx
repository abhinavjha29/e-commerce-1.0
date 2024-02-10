import { useContext } from "react";
import Modal from "./Modal";
import SingleCartItem from "./SingleCartitem";

import Order from "./order";
import ProductContext from "../../Store/ProductContext";
const Cart = ({ setSelectedTab }) => {
  // const productContext = useContext(ProductContext);
  // const cartElements = productContext.items;
  // console.log(cartElements);
  // const totalAmount = cartElements.reduce((total, item) => {
  //   return total + item.price * item.quantity;
  // }, 0);
  const { items } = useContext(ProductContext);
  console.log(items);
  let cartElements = items;
  // const cartElements = [
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: {
  //       rate: 3.9,
  //       count: 120,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Mens Casual Premium Slim Fit T-Shirts ",
  //     price: 22.3,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "men's clothing",
  //     image:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     rating: {
  //       rate: 4.1,
  //       count: 259,
  //     },
  //   },
  // ];
  const totalAmount = 12;
  return (
    <Modal>
      <div class="col cart-card">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0">
              <span class="text-muted">Sort by:</span>
              <a href="#!" class="text-body">
                price <i class="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>
        {cartElements.map((item) => (
          <SingleCartItem
            title={item.title}
            key={item.title}
            price={item.price}
            imageUrl={item.image}
            quantity={item.quantity}
            id={item.id}
          ></SingleCartItem>
        ))}
        <div class="card">
          {cartElements.length > 0 && (
            <Order
              totalAmount={totalAmount}
              setSelectedTab={setSelectedTab}
            ></Order>
          )}
          {cartElements.length === 0 && (
            <>
              <h2 className="empty">Cart is Empty</h2>
              <button
                className="btn btn-danger"
                onClick={() => setSelectedTab("home")}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

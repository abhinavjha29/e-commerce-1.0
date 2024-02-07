import { useContext, useEffect } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import ProductContext from "../../Store/ProductContext";
import styles from "./SingleCartitems.module.css";
// import classes from "./Singlecartitems.module.css";

const SingleCartItem = ({ imageUrl, title, price, quantity }) => {
  // const productContext = useContext(ProductContext);
  // const addQuantity = productContext.addQuantity;
  // const addItem = productContext.addItem;
  // const removeItem = productContext.removeItem;
  const { addQuantity, removeItem, subQuantity, addItem } =
    useContext(ProductContext);
  useEffect(() => {
    if (quantity <= 0) {
      removeItem(title);
    }
  }, [quantity]);
  console.log("quantity is ", quantity);
  const handleaddbtn = (e) => {
    e.preventDefault();
    console.log("add btn");
    addQuantity();
    const item = { imageUrl, title, price, quantity };
    addItem(item);
  };
  const handleRemovebtn = (e) => {
    e.preventDefault();

    removeItem(title);
  };
  const handleMinusbtn = (e) => {
    e.preventDefault();
    console.log("--- buton");

    const item = { imageUrl, title, price, quantity };
    subQuantity(item);
  };
  return (
    <>
      <div className="card-rounded-2">
        <div class="card-body w-380">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img
                src={imageUrl}
                class="img-fluid rounded-3"
                alt="Cotton T-shirt"
              />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">{title}</p>
              <p>{price}</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button
                class="btn btn-link px-2"
                onClick={(e) => handleMinusbtn(e)}
              >
                <FaMinus />
              </button>

              <input
                type="text"
                value={` x${quantity}`}
                className={styles.quant_input}
                readOnly
              />

              <button
                class="btn btn-link px-2"
                onClick={(e) => handleaddbtn(e)}
              >
                <FaPlus />
              </button>
            </div>
            <div
              className={`col-md-3 col-lg-2 col-xl-2 offset-lg-1 ${styles.price_container}`}
            >
              <h5 class="mb-0">{price}</h5>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" class="text-danger">
                <button
                  className="btn-btn-danger"
                  onClick={(e) => {
                    handleRemovebtn(e);
                  }}
                >
                  <MdDelete />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleCartItem;

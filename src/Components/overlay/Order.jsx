import { MdCurrencyRupee } from "react-icons/md";
const Order = ({ setSelectedTab, totalAmount }) => {
  return (
    <div class="card-body p-4 d-flex justify-content-between">
      <button type="button" class="btn btn-warning btn-block">
        Order
      </button>
      <p>
        Total Amount <MdCurrencyRupee />
        {totalAmount}
      </p>
      <button
        type="button"
        class="btn btn-danger btn-block float-right"
        onClick={() => setSelectedTab("home")}
      >
        Close
      </button>
    </div>
  );
};

export default Order;

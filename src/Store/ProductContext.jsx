import { createContext } from "react";

const ProductContext = createContext({
  items: [],
  totalQuantity: 0,
  addQuantity: () => {},
  subQuantity: () => {},
  removeItem: () => {},
  addItem: () => {},
  defaultItem: [],
  totatAmount: 0,
});

export default ProductContext;

import { createContext } from "react";

const CartContext = createContext({
  itemList: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

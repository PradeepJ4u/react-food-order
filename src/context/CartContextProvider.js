import { useReducer } from "react";
import CartContext from "./CartContext";
const defaultCartState = {
  itemList: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const updatedCartItemIndex = state.itemList.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.itemList[updatedCartItemIndex];
    let updatedItemList;

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemList = [...state.itemList];
      updatedItemList[updatedCartItemIndex] = updatedCartItem;
    } else {
      updatedItemList = state.itemList.concat(action.item);
    }
    return { itemList: updatedItemList, totalAmount: updateTotalAmount };
  }
  if (action.type === "REMOVE_ITEM") {
    const updatedCartItemIndex = state.itemList.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.itemList[updatedCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updateItemList;
    if (existingCartItem.amount === 1) {
      updateItemList = state.itemList.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updateItemList = [...state.itemList];
      updateItemList[updatedCartItemIndex] = updateItem;
    }
    return { itemList: updateItemList, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};
const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToContext = (item) => {
    console.log(item);
    dispatchCartState({ type: "ADD_ITEM", item: item });
  };
  const removeItemFormContext = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    itemList: cartState.itemList,
    totalAmount: cartState.totalAmount,
    addItem: addItemToContext,
    removeItem: removeItemFormContext,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cntx = useContext(CartContext);
  console.log(cntx);
  const totalAmount = `$${cntx.totalAmount.toFixed(2)}`;
  const showOrderButton = cntx.itemList.length > 0;

  const addItemToCart = (item) => {
    cntx.addItem({...item, amount:+1})
  };
  const removeItemToCart = (id) => {
    cntx.removeItem(id)
  };
  const cartItem = (
    <ul className={styles["cart-items"]}>
      {cntx.itemList.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAddItem={addItemToCart.bind(null, item)}
            onRemoveItem={removeItemToCart.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal hideCart={props.hideCart}>
      {cartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        {showOrderButton && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
export default Cart;

import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cntx = useContext(CartContext);
  const [bumpCartButtom, setBumpCartButton] = useState(false);

  const itemListArray = cntx.itemList;

  const numberOfCartItem = itemListArray.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${bumpCartButtom ? styles.bump : ""}`;

  useEffect(() => {
    if (itemListArray.length === 0) {
      return;
    }
    setBumpCartButton(true);
    const timer = setTimeout(() => {
      setBumpCartButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [itemListArray]);

  return (
    <button className={buttonClasses} onClick={props.cartClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
}
export default HeaderCartButton;

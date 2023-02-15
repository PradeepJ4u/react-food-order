import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const cntx = useContext(CartContext)
  const mealItem = props.mealItem;
  const price = `${mealItem.price.toFixed(2)}`;

  const addToCartHandler = (enteredAmount) => {
    cntx.addItem({
      id: mealItem.id,
      name: mealItem.name,
      price: mealItem.price,
      amount: enteredAmount
    })
    console.log({
      id: mealItem.id,
      name: mealItem.name,
      price: mealItem.price,
      amount: enteredAmount
    });
  }

  return (
    <li className={styles.meal} key={mealItem.id}>
      <div>
        <h3>{mealItem.name}</h3>
        <div className={styles.description}>{mealItem.description}</div>
        <div className={styles.price}>$ {price}</div>
      </div>
      <div>
        <MealItemForm id={mealItem.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
export default MealItem;

import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        <HeaderCartButton cartClick={props.cartClick}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="Plate of tasty Food"/>
      </div>
    </>
  );
}
export default Header;

import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const hideCart = () => {
    setShowCart(false);
  };

  const handelCartClick = () => {
    setShowCart(true);
  };
  return (
    <CartContextProvider>
      {showCart && <Cart hideCart={hideCart} />}
      <Header cartClick={handelCartClick} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;

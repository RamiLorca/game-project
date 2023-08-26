import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import { addToCart, Product } from "./shoppingSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from './store';
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChangeColor from "./components/ChangeColor";
import DisplayUserInfo from "./components/DisplayUserInfo";

const App: React.FC = () => {

  const dispatch = useDispatch();
  const shopping = useSelector((state: RootState) => state.shopping);

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert> }
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

      {shopping.products.map((product: Product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <p>Quantity: {shopping.cart[product.id] || 0}</p>
        </div>
      ))}

      <h2>Total: ${shopping.totalAmount}</h2>

      <br />

      <Profile />

      <br />

      <Login />

      <br />

      <ChangeColor />

      <br />

      <DisplayUserInfo />

    </div>
  );
}

export default App;

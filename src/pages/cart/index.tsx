import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { setCartDropdownHidden } from "../../store/cart/cartSlice";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import styles from "./cart.module.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [clientSide, setClientSide] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartDropdownHidden(true));
  }, []);

  useEffect(() => {
    setClientSide(true);
  }, []);

  return (
    <main id="main" className="container">
      <div className={styles.cart}>
        <h1 className={styles.title}>My Cart</h1>

        <div>
          {clientSide &&
            cartItems.map((item, id) => <CheckoutItem item={item} key={id} />)}
        </div>

        <p className={styles.total}>
          Cart Total:&nbsp;
          {clientSide && (
            <span className={styles.price}>&nbsp;${cartTotal}.00</span>
          )}
        </p>
      </div>
    </main>
  );
};
export default Cart;

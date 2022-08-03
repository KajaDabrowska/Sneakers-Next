import { useEffect } from "react";
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartDropdownHidden(true));
  }, []);

  return (
    <main id="main" className="container">
      <div className={styles.cart}>
        <h1 className={styles.title}>My Cart</h1>

        {cartItems.map((item, id) => (
          <CheckoutItem item={item} key={id} />
        ))}

        <p className={styles.total}>
          Cart Total:&nbsp;
          <span className={styles.price}>&nbsp;${cartTotal}.00</span>
        </p>
      </div>
    </main>
  );
};
export default Cart;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../src/store/cart/cart.selector";
import { setCartDropdownHidden } from "../../src/store/cart/cartSlice";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./cart.styles.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartDropdownHidden(true));
  }, []);

  return (
    <main id="main" className="container">
      <div className="cart ">
        <h1 className="cart__title">My Cart</h1>

        {cartItems.map((item, id) => (
          <CheckoutItem item={item} key={id} />
        ))}

        <p className="cart__total">
          Cart Total:&nbsp;
          <span className="cart__total--price">&nbsp;${cartTotal}.00</span>
        </p>
      </div>
    </main>
  );
};
export default Cart;

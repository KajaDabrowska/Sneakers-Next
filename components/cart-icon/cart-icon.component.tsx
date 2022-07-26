import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartDropdownHidden,
  selectCartCount,
} from "../../src/store/cart/cart.selector";
import { setCartDropdownHidden } from "../../src/store/cart/cartSlice";

import "./cart-icon.styles.scss";

const CartIcon = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const cartCount = useSelector(selectCartCount);
  const cartDropdownHidden = useSelector(selectCartDropdownHidden);

  const dispatch = useDispatch();

  const toggleCartHidden = () => {
    dispatch(setCartDropdownHidden(!cartDropdownHidden));
  };

  return (
    <button className="cart-icon" onClick={toggleCartHidden} ref={ref}>
      <Image
        src="../../public/assets/icon-cart.svg"
        className={`cart-icon__icon ${cartCount ? "active" : ""}`}
      />

      {cartCount ? (
        <span className="cart-icon__items-amount">{cartCount}</span>
      ) : (
        ""
      )}
    </button>
  );
});

export default CartIcon;

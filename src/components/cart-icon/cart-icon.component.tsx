import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartDropdownHidden,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setCartDropdownHidden } from "../../store/cart/cartSlice";

//TODO SVGs in NEXT
import cartIcon from "../../public/assets/icon-cart.svg";

import styles from "./cart-icon.module.scss";

const CartIcon = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const cartCount = useSelector(selectCartCount);
  const cartDropdownHidden = useSelector(selectCartDropdownHidden);

  const dispatch = useDispatch();

  const toggleCartHidden = () => {
    dispatch(setCartDropdownHidden(!cartDropdownHidden));
  };

  //FIXME works?
  // const activeStyles = cartCount ? styles.active : "";

  return (
    <button className={styles.cartIcon} onClick={toggleCartHidden} ref={ref}>
      <div className={`${styles.icon} ${cartCount ? styles.active : ""}`}>
        <Image layout="fill" src={cartIcon} alt="" />
      </div>
      {cartCount ? <span className={styles.amount}>{cartCount}</span> : ""}
    </button>
  );
});

CartIcon.displayName = "CartIcon";
export default CartIcon;

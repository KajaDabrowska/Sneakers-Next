import React, { useEffect } from "react";
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

const CartIcon = React.forwardRef<HTMLButtonElement>((props, cartIconRef) => {
  const cartCount = useSelector(selectCartCount);
  const cartDropdownHidden = useSelector(selectCartDropdownHidden);

  const dispatch = useDispatch();

  const toggleCartHidden = () => {
    dispatch(setCartDropdownHidden(!cartDropdownHidden));
  };

  return (
    <button
      className={styles.cartIcon}
      onClick={toggleCartHidden}
      ref={cartIconRef}
    >
      <div className={`${styles.icon} ${cartCount ? styles.active : ""}`}>
        <Image src={cartIcon} alt="cart" />
      </div>
      {cartCount ? <span className={styles.amount}>{cartCount}</span> : ""}
    </button>
  );
});
CartIcon.displayName = "CartIcon";

type Props = {
  cartIconRef: React.RefObject<HTMLButtonElement>;
};

const WrappedCartIcon = ({ cartIconRef }: Props) => {
  return <CartIcon ref={cartIconRef} />;
};

export default WrappedCartIcon;

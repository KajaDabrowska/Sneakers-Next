import React, { useContext, Fragment, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import { setCartDropdownHidden } from "../../store/cart/cartSlice";

import {
  selectCartItems,
  selectCartCount,
} from "../../store/cart/cart.selector";

import { AddBtnContext } from "../../contexts/add-btn-context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import styles from "./cart-dropdown.module.scss";

type Props = {
  cartIconToggleRef: React.RefObject<HTMLButtonElement>;
};

const CartDropdown = ({ cartIconToggleRef }: Props) => {
  // const { ref: addBtnRef } = useContext(AddBtnContext); //FIXME

  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  // const cartDropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       cartDropdownRef.current &&
  //       !cartDropdownRef.current.contains(event.target as Node) &&
  //       !cartIconToggleRef?.current?.contains(event.target as Node) &&
  //       !addBtnRef?.current?.contains(event.target as Node)
  //     ) {
  //       dispatch(setCartDropdownHidden(true));
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <div
      className={styles.cartDropdown}
      // ref={cartDropdownRef}
    >
      <h2 className={styles.title}>Cart</h2>

      <div className={styles.listBtnContainer}>
        {!cartCount ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          <Fragment>
            {/*FIXME i think maybe li should be here and not in the cartitem */}
            <ul className={styles.list}>
              {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </ul>

            <Link href="/cart" passHref>
              {/*The btn type is responsible for bringing focus to it once dropdown is visible  */}
              <Button btnType="checkout">Checkout</Button>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;

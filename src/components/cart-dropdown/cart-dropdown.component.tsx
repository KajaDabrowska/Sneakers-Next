import React, {
  useContext,
  Fragment,
  useRef,
  useEffect,
  MutableRefObject,
} from "react";
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

const CartDropdown = React.forwardRef<HTMLButtonElement>(
  (props, cartIconRef) => {
    const { addBtnRef } = useContext(AddBtnContext);

    const cartItems = useSelector(selectCartItems);
    const cartCount = useSelector(selectCartCount);

    const cartDropdownRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          cartDropdownRef.current &&
          !cartDropdownRef.current.contains(event.target as Node) &&
          (cartIconRef as MutableRefObject<HTMLButtonElement>).current &&
          !(
            cartIconRef as MutableRefObject<HTMLButtonElement>
          )?.current?.contains(event.target as Node) &&
          !addBtnRef?.current?.contains(event.target as Node)
        ) {
          dispatch(setCartDropdownHidden(true));
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className={styles.cartDropdown} ref={cartDropdownRef}>
        <h2 className={styles.title}>Cart</h2>

        <div className={styles.listBtnContainer}>
          {!cartCount ? (
            <p className={styles.empty}>Your cart is empty.</p>
          ) : (
            <Fragment>
              <ul className={styles.list}>
                {cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
              </ul>

              <Link href="/cart" passHref>
                {/*The btn type is responsible for bringing focus to it once dropdown is visible  */}
                <a>
                  <Button btnType="checkout">Checkout</Button>
                </a>
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
);

CartDropdown.displayName = "CartDropdown";
export default CartDropdown;

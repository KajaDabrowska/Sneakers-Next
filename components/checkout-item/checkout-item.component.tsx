import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { ItemType } from "../../src/types/types";

import {
  addItemToCart,
  decreaseItemQuantity,
} from "../../src/store/cart/cartSlice";

import DeleteIcon from "../delete-icon/delete-icon.component";
import minusIcon from "../../public/assets/icon-minus.svg";
import plusIcon from "../../public/assets/icon-plus.svg";

import styles from "./checkout-item.module.scss";

type Props = {
  item: ItemType;
};

const CheckoutItem = ({ item }: Props) => {
  const { name, imageUrl, id, quantity } = item;

  const priceCurrent = item.price.current;
  const itemTotalPrice = priceCurrent * quantity;

  const dispatch = useDispatch();

  const handleItemQuantityIncrease = () => {
    if (quantity < 10) dispatch(addItemToCart(item));
  };

  const handleItemQuantityDecrease = () => {
    dispatch(decreaseItemQuantity(item));
  };

  return (
    <div className={styles.checkoutItem}>
      <li className={styles.item}>
        <Link href={`/product-${id}`}>
          <span className="sr-only">{name} page</span>
          <img className={styles.image} src={imageUrl} alt="" />
        </Link>
        <div className={styles.flexContainer}>
          <div className={styles.description}>
            <span>{name}</span>
            <p>
              <span>
                ${priceCurrent}.00
                {quantity > 1 ? (
                  <Fragment>
                    <span className={styles.xSign}>&nbsp;x&nbsp;</span>
                    <span>{quantity}&nbsp;&nbsp;</span>
                    <span className={styles.fullPrice}>
                      ${itemTotalPrice}.00
                    </span>
                  </Fragment>
                ) : (
                  ""
                )}
              </span>
            </p>
          </div>

          <div className={styles.counter}>
            <button onClick={handleItemQuantityDecrease} className={styles.btn}>
              <Image src={minusIcon} alt="Decrease item count" />
            </button>

            <span className={styles.count} aria-live="polite">
              <span className="sr-only">Item count</span>
              {quantity}
            </span>

            <button onClick={handleItemQuantityIncrease} className={styles.btn}>
              <Image src={plusIcon} alt="Increase item count" />
            </button>
          </div>
        </div>
        <div className={styles.delete}>
          <DeleteIcon itemToDelete={item} />
        </div>
      </li>
    </div>
  );
};

export default CheckoutItem;

/*
<ul className="cart-dropdown__list">
        {cartItems.map((item) => (
          <Fragment>

          
          <CartItem key={item.id} cartItem={item} />
          
          <div className="item-page__add">
          <div className="item-page__counter counter">
            <button
              // onClick={decreaseQuantity}
              className="counter__btn counter__btn--minus"
            >
              <img
                className="counter__icon"
                src={minusIcon}
                alt="Decrease item count"
              />
            </button>

            <span className="counter__count" aria-live="polite">
              <span className="sr-only">Item count</span>
              {itemQuantity}
            </span>

            <button
              // onClick={increaseQuantity}
              className="counter__btn counter__btn--plus"
            >
              <img
                className="counter__icon"
                src={plusIcon}
                alt="Increase item count"
              />
            </button>
          </div>
          </Fragment>
        ))}
      </ul>
*/

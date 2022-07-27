import { Fragment } from "react";
import Link from "next/link";

import { ItemType } from "../../src/types/types";

import DeleteIcon from "../delete-icon/delete-icon.component";

import styles from "./cart-item.module.scss";

type Props = {
  cartItem: ItemType;
};

const CartItem = ({ cartItem }: Props) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const currentPrice = price.current;

  const itemTotalPrice = currentPrice * quantity;

  //TODO how does a screen reader announce this type of big ass link
  return (
    <li className={styles.item}>
      {/*FIXME i should be a next js [] route  */}
      <Link className={styles.imgAndDesc} href={`/product-${cartItem.id}`}>
        <img className={styles.image} src={imageUrl} alt="" />

        <div className={styles.description}>
          <span className={styles.name}>{name}</span>
          <p>
            <span>
              ${currentPrice}.00
              {quantity > 1 ? (
                <Fragment>
                  <span className={styles.xSign}>&nbsp;x&nbsp;</span>
                  <span>{quantity}&nbsp;&nbsp;</span>
                  <span className={styles.fullPrice}>${itemTotalPrice}.00</span>
                </Fragment>
              ) : (
                ""
              )}
            </span>
          </p>
        </div>
      </Link>

      <div className={styles.delete}>
        <DeleteIcon itemToDelete={cartItem} />
      </div>
    </li>
  );
};

export default CartItem;

/*
<li className="cart-dropdown__item item">
      <img className="item__image" src={itemImage} alt="" />

      <div className="item__description">
        <span>Fall Limited Edition Sneakers</span>
        <p>
          <span className="item__price-per-one">
            $125.00 <span className="item__x-sign">x</span>{" "}
            <span className="item__amount">3&nbsp;</span>{" "}
            <span className="item__full-price">$375.00</span>
          </span>
        </p>
      </div>

      <DeleteIcon />
    </li>
*/

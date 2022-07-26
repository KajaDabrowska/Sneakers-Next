import { Fragment } from "react";
import Link from "next/link";

import { ItemType } from "../../src/types/types";

import DeleteIcon from "../delete-icon/delete-icon.component";

import "./cart-item.styles.scss";

type Props = {
  cartItem: ItemType;
};

const CartItem = ({ cartItem }: Props) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const currentPrice = price.current;

  const itemTotalPrice = currentPrice * quantity;

  //TODO how does a screen reader announce this type of big ass link
  return (
    <li className="cart-dropdown__item item">
      {/*FIXME i should be a next js [] route  */}
      <Link className="item__img-and-desc" href={`/product-${cartItem.id}`}>
        <img className="item__image" src={imageUrl} alt="" />

        <div className="item__description">
          <span className="item__name">{name}</span>
          <p>
            <span className="item__price-per-one">
              ${currentPrice}.00
              {quantity > 1 ? (
                <Fragment>
                  <span className="item__x-sign">&nbsp;x&nbsp;</span>
                  <span className="item__amount">{quantity}&nbsp;&nbsp;</span>
                  <span className="item__full-price">${itemTotalPrice}.00</span>
                </Fragment>
              ) : (
                ""
              )}
            </span>
          </p>
        </div>
      </Link>

      <div className="item__delete">
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

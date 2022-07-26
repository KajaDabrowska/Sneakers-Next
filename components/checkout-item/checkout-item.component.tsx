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

import "./checkout-item.styles.scss";

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
    <div className="checkout-item">
      <li className="checkout-item__item item">
        <Link className="item__img-link" href={`/product-${id}`}>
          <span className="sr-only">{name} page</span>
          <img className="item__image" src={imageUrl} alt="" />
        </Link>
        <div className="checkout-item__flex-container">
          <div className="item__description">
            <span>{name}</span>
            <p>
              <span className="item__price-per-one">
                ${priceCurrent}.00
                {quantity > 1 ? (
                  <Fragment>
                    <span className="item__x-sign">&nbsp;x&nbsp;</span>
                    <span className="item__amount">{quantity}&nbsp;&nbsp;</span>
                    <span className="item__full-price">
                      ${itemTotalPrice}.00
                    </span>
                  </Fragment>
                ) : (
                  ""
                )}
              </span>
            </p>
          </div>

          <div className="checkout-item__counter counter">
            <button
              onClick={handleItemQuantityDecrease}
              className="counter__btn counter__btn--minus"
            >
              <Image
                src="../../public/assets/icon-minus.svg"
                className="counter__icon"
                alt="Decrease item count"
              />
            </button>

            <span className="counter__count" aria-live="polite">
              <span className="sr-only">Item count</span>
              {quantity}
            </span>

            <button
              onClick={handleItemQuantityIncrease}
              className="counter__btn counter__btn--plus"
            >
              <Image
                src="../../public/assets/icon-plus.svg"
                className="counter__icon"
                alt="Increase item count"
              />
            </button>
          </div>
        </div>
        <div className="item__delete">
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

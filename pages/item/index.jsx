import { Fragment, useContext, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cartSlice";

import { AddBtnContext } from "../../contexts/add-btn-context";

import ImageCarousel from "../../../components/image-carousel/image-carousel.component";
// import Button from "../../components/button/button.component";

//ICONS
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import cartIcon from "../../assets/icon-cart.svg";
import closeIcon from "../../assets/icon-close.svg";

import "./item.styles.styles.scss";

//BUG
// ATTENTION
/* This components is not typed with TS because of this issue (https://github.com/microsoft/TypeScript/issues/48267) */
/* That is, at the time of writing this, TS does not support the <HTMLDialogElement> so with TS i would have to use a lot of @ts-ignores for this to work or use a completely different approach of writing a modal */

//TODO? click outside to close modal?
const ItemPage = ({ item }) => {
  const { ref } = useContext(AddBtnContext);

  // console.log(item);
  const { brand, name, description, imageUrl, images, hasMultiplePrices } =
    item;
  const priceCurrent = item.price.current;
  const priceOld = item.price.old;

  const discountPercentage = Math.trunc(
    ((priceOld - priceCurrent) / priceOld) * 100
  );

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItemToCart(item, itemQuantity));
  };

  const [itemQuantity, setItemQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (itemQuantity !== 1) setItemQuantity(itemQuantity - 1);
  };
  const increaseQuantity = () => {
    if (itemQuantity < 10) setItemQuantity(itemQuantity + 1);
  };

  const dialogRef = useRef();

  const toggleModal = () => {
    const dialog = dialogRef.current;

    if (!dialog.open) {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.showModal();
        console.log("The <dialog> API is not supported by this browser");
      }
    } else {
      dialog.close();
    }
  };

  return (
    <main id="main" className="item-page-container">
      <div className="item-page">
        <dialog ref={dialogRef} className="dialog">
          <button className="dialog__close-btn" onClick={toggleModal}>
            <img
              src={closeIcon}
              alt="close modal"
              className="dialog__close-icon"
            />
          </button>

          {/* <ImageCarousel
            imageUrl={imageUrl}
            imagesArray={images}
            toggleModal={toggleModal}
            isModal={true}
          /> */}
        </dialog>

        <div className="container-left">
          {/* <ImageCarousel
            imageUrl={imageUrl}
            imagesArray={images}
            toggleModal={toggleModal}
            isModal={false}
          /> */}
        </div>

        <div className="container-right">
          <p className="item-page__brand">{brand}</p>
          <h1 className="item-page__name">{name}</h1>
          <p className="item-page__description">{description}</p>

          <p className="item-page__prices price">
            <span className="price__current">${priceCurrent}.00</span>
            {hasMultiplePrices ? (
              <Fragment>
                <span className="price__discount">{discountPercentage}%</span>
                <span className="price__old">
                  <s>${priceOld}.00</s>
                </span>
              </Fragment>
            ) : (
              ""
            )}
          </p>

          <div className="item-page__add">
            <div className="item-page__counter counter">
              <button
                onClick={decreaseQuantity}
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
                onClick={increaseQuantity}
                className="counter__btn counter__btn--plus"
              >
                <img
                  className="counter__icon"
                  src={plusIcon}
                  alt="Increase item count"
                />
              </button>
            </div>

            <button ref={ref} onClick={addItemHandler} className="btn">
              <img src={cartIcon} alt="" className="item-page__main-add-btn" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemPage;

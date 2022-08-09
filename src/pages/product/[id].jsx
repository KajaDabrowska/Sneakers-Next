import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Fragment,
  useContext,
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cartSlice";

import { AddBtnContext } from "../../contexts/add-btn-context";

// import ImageCarousel from "../../components/image-carousel/image-carousel.component";
import Button from "../../components/button/button.component";

import { selectCategories } from "../../store/category/category.selector";

//ICONS
import minusIcon from "../../public/assets/icon-minus.svg";
import plusIcon from "../../public/assets/icon-plus.svg";
import cartIcon from "../../public/assets/icon-cart.svg";
import closeIcon from "../../public/assets/icon-close.svg";

import styles from "./item.module.scss";

//BUG
// ATTENTION
/* This components is not typed with TS because of this issue (https://github.com/microsoft/TypeScript/issues/48267) */
/* That is, at the time of writing this, TS does not support the <HTMLDialogElement> so with TS i would have to use a lot of @ts-ignores for this to work or use a completely different approach of writing a modal */

// export const getStaticProps = async (context) => {
//   console.log("context.query", context.query);
//   // returns { id: episode.itunes.episode, title: episode.title}

//   //you can make DB queries using the data in context.query
//   return {
//     props: {
//       id: context.query.id, //pass it to the page props
//     },
//   };
// };

//TODO? click outside to close modal?
const ItemPage = () => {
  //FIXME
  const { addBtnRef } = useContext(AddBtnContext);

  const [item, setItem] = useState(null);
  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);
  const [priceCurrent, setPriceCurrent] = useState(null);
  const [priceOld, setPriceOld] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imagesArray, setImagesArray] = useState(null);
  const [hasMultiplePrices, setHasMultiplePrices] = useState(null);
  const [discountPercentage, setDiscountPercentage] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const categories = useSelector(selectCategories);

  useEffect(() => {
    const womenIds = categories.women.map((item) => item.id);
    const womenIncludes = womenIds.includes(id);

    const itemIndex = womenIncludes
      ? categories.women.findIndex((item) => item.id === id)
      : categories.men.findIndex((item) => item.id === id);
    const theItem = womenIncludes
      ? categories.women[itemIndex]
      : categories.men[itemIndex];

    if (theItem) {
      const { brand, name, description, imageUrl, images, hasMultiplePrices } =
        theItem;

      const priceCurrent = theItem.price.current;
      const priceOld = theItem.price.old;
      const discountPercentage = Math.trunc(
        ((priceOld - priceCurrent) / priceOld) * 100
      );

      setItem(theItem);
      setName(name);
      setBrand(brand);
      setPriceCurrent(priceCurrent);
      setPriceOld(priceOld);
      setDescription(description);
      setImageUrl(imageUrl);
      setImagesArray(images);
      setHasMultiplePrices(hasMultiplePrices);
      setDiscountPercentage(discountPercentage);
    }
  }, [categories, id]);

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

  const ImageCarousel = useMemo(
    () =>
      dynamic(
        () =>
          import("../../components/image-carousel/image-carousel.component"),
        {
          loading: () => <p>Image Carousel loading...</p>,
          ssr: false,
        }
      ),
    []
  );

  return (
    <main id="main" className={styles.itemPageContainer}>
      {item && (
        <div className={styles.itemPage}>
          <dialog ref={dialogRef} className={styles.dialog}>
            <button onClick={toggleModal} className={styles.closeBtn}>
              <div className={styles.closeIcon}>
                <Image src={closeIcon} alt="close modal" />
              </div>
            </button>

            <ImageCarousel
              imageUrl={imageUrl}
              imagesArray={imagesArray}
              toggleModal={toggleModal}
              isModal={true}
            />
          </dialog>

          <div className="container-left">
            <ImageCarousel
              imageUrl={imageUrl}
              imagesArray={imagesArray}
              toggleModal={toggleModal}
              isModal={false}
            />
          </div>

          <div className={styles.containerRight}>
            <p className={styles.brand}>{brand}</p>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.description}>{description}</p>

            <p className={`${styles.prices} ${styles.price}`}>
              <span className={styles.current}>${priceCurrent}.00</span>
              {hasMultiplePrices ? (
                <Fragment>
                  <span className={styles.discount}>{discountPercentage}%</span>
                  <span className={styles.old}>
                    <s>${priceOld}.00</s>
                  </span>
                </Fragment>
              ) : (
                ""
              )}
            </p>

            <div className={styles.add}>
              <div className={styles.counter}>
                <button onClick={decreaseQuantity} className={styles.btn}>
                  <div className={styles.icon}>
                    <Image src={minusIcon} alt="Decrease item count" />
                  </div>
                </button>

                <span className={styles.count} aria-live="polite">
                  <span className="sr-only">Item count</span>
                  {itemQuantity}
                </span>

                <button onClick={increaseQuantity} className={styles.btn}>
                  <div className={styles.icon}>
                    <Image src={plusIcon} alt="Decrease item count" />
                  </div>
                </button>
              </div>

              {/* <Button>
                <div className={styles.mainAddBtn}>
                  <Image src={cartIcon} alt="" />
                </div>
                Add to cart
              </Button> */}

              <button
                ref={addBtnRef}
                onClick={addItemHandler}
                className={styles.btn} //TODO?
              >
                <div className={styles.mainAddBtn}>
                  <Image src={cartIcon} alt="" />
                </div>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ItemPage;

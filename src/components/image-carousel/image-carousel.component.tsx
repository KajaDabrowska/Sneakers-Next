import { useState, useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import prevIcon from "../../public/assets/icon-previous.svg";
import nextIcon from "../../public/assets/icon-next.svg";

import styles from "./image-carousel.module.scss";

type Props = {
  imageUrl: string;
  imagesArray: string[];
  toggleModal: () => void;
  isModal: boolean;
};

const ImageCarousel = ({
  imageUrl,
  imagesArray,
  toggleModal,
  isModal,
}: Props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const CAROUSEL_LENGTH = 3; // 4 imgs

  const modalStyles = isModal ? styles.isModal : "";

  const prevImg = () => {
    if (carouselIndex !== 0) {
      setCarouselIndex(carouselIndex - 1);
    } else if (carouselIndex === 0) {
      setCarouselIndex(CAROUSEL_LENGTH);
    }
  };
  const nextImg = () => {
    if (carouselIndex !== CAROUSEL_LENGTH) {
      setCarouselIndex(carouselIndex + 1);
    } else if (carouselIndex === CAROUSEL_LENGTH) {
      setCarouselIndex(0);
    }
  };

  const chooseImage = (idx: number) => {
    setCarouselIndex(idx);
  };

  const maxWidthMediaQuery = 850;
  const size = useWindowSize();

  //FIXME main image on mobile hight weird
  //FIXME classes
  return (
    <div className={styles.imageCarousel}>
      <div className={`${styles.imageContainer} ${modalStyles}`}>
        {/*FIXME no prev btn  */}
        <button onClick={prevImg} className={`${styles.btn} ${styles.btnPrev}`}>
          <div className={`${styles.icon} ${styles.iconPrev}`}>
            <Image
              src={prevIcon}
              // className="image-container__icon image-container__icon--prev"
              alt="Previous image"
            />
          </div>
        </button>

        {/* This whole thing is for accessibility reasons */}
        {!isModal && size?.width > maxWidthMediaQuery ? (
          <button className={styles.imageBtn} onClick={toggleModal}>
            <div className={styles.image}>
              <Image
                src={
                  carouselIndex === 0
                    ? imageUrl
                    : imagesArray[carouselIndex - 1]
                }
                width={350}
                height={350}
                alt=""
              />
            </div>
          </button>
        ) : (
          <div className={styles.image}>
            <Image
              src={
                carouselIndex === 0 ? imageUrl : imagesArray[carouselIndex - 1]
              }
              width={isModal ? 600 : 300}
              //FIXME width 100% cont
              height={isModal ? 500 : 350}
              alt=""
            />
          </div>
        )}

        <button onClick={nextImg} className={`${styles.btn} ${styles.btnNext}`}>
          <div className={`${styles.icon} ${styles.iconNext}`}>
            <Image
              src={nextIcon}
              // className="image-container__icon image-container__icon--next"
              alt="Next image"
            />
          </div>
        </button>
      </div>

      {/*only on desktop carousel slider beneath main image */}
      <div className={styles.carousel}>
        {Array.from({ length: CAROUSEL_LENGTH + 1 }).map((image, idx) => (
          <button
            onClick={() => chooseImage(idx)}
            key={uuidv4()}
            className={`${styles.imageWrapper} ${
              carouselIndex === idx ? `${styles.active}` : ""
            }`}
          >
            <div
              className={`${styles.image} + ${
                carouselIndex === idx ? `${styles.active}` : ""
              }`}
            >
              <Image
                src={idx === 0 ? imageUrl : imagesArray[idx - 1]}
                alt=""
                height={800}
                width={800}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

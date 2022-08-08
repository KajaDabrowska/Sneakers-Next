import Link from "next/link";
import Image from "next/image";
import { ItemType } from "../../types/types";

import styles from "./product-card.module.scss";

type Props = {
  product: ItemType;
};
const ProductCard = ({ product }: Props) => {
  const { name, imageUrl, id, brand, description, images, hasMultiplePrices } =
    product;
  const price = product.price.current;

  return (
    <div className={styles.product}>
      {/*FIXME these links are not tabbable FIXED but look elsewhere*/}
      <Link
        href={{
          pathname: `/product/${id}`,
        }}
      >
        <a className={styles.link}>
          <figure>
            {/*FIXME shorten the title cuz the focus style is wider than image sometimes */}
            <div className={styles.imageWrapper}>
              <Image
                src={imageUrl}
                alt=""
                // className={styles.image}
                // layout="fill"
                layout="intrinsic"
                //TODO make the layout fill once u fix the classes for CSS module
                width={250}
                height={250}
              />
            </div>

            <figcaption className={styles.desc}>
              <span className={styles.name}>{name}</span>
              <span className={styles.price}>${price}.00</span>
            </figcaption>
          </figure>
        </a>
      </Link>
    </div>
  );
};
export default ProductCard;

/*
<Image
            src={imageUrl}
            alt=""
            className="product__image"
            layout="fill"
          />
*/

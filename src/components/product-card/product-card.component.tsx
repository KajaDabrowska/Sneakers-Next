import Link from "next/link";
import Image from "next/image";
import { ItemType } from "../../types/types";

import styles from "./product-card.module.scss";

type Props = {
  product: ItemType;
};
//FIXME how to use img when img is from url link
const ProductCard = ({ product }: Props) => {
  const { name, imageUrl, id } = product;
  const price = product.price.current;

  return (
    <div className="product product-container">
      <Link href={`/product-${id}`} className="product__link">
        <figure className="product__figure">
          {/* <img src={imageUrl} alt="" className="product__image" /> */}
          <Image
            src={imageUrl}
            alt=""
            className="product__image"
            layout="intrinsic"
            //TODO make the layout fill once u fix the classes for CSS module
            width={250}
            height={250}
          />

          <figcaption className="product__desc">
            <span className="product__name">{name}</span>
            <span className="product__price">${price}.00</span>
          </figcaption>
        </figure>
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

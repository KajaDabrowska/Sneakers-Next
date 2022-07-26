import Link from "next/link";

import { ItemType } from "../../src/types/types";

import "./product-card.styles.scss";

type Props = {
  product: ItemType;
};

const ProductCard = ({ product }: Props) => {
  const { name, imageUrl, id } = product;
  const price = product.price.current;

  return (
    <div className="product product-container">
      <Link href={`/product-${id}`} className="product__link">
        <figure className="product__figure">
          <img src={imageUrl} alt="" className="product__image" />

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

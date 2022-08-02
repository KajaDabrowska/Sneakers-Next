import Link from "next/link";
import { useSelector } from "react-redux";

import { selectCategories } from "../../store/category/category.selector";

import ProductCard from "../product-card/product-card.component";

import styles from "./collections.module.scss";

const Collections = () => {
  const categories = useSelector(selectCategories);
  console.log("categories", categories);
  return (
    <main id="main" className={`container ${styles.collections}`}>
      <h1 className={styles.title}>Collections</h1>

      {Object.keys(categories).map((title) => (
        <div key={title} className={styles.collection}>
          <h2>
            <Link href={`/${title}`}>
              <span className={styles.title}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </span>
            </Link>
          </h2>

          <div className={styles.products}>
            {categories[title]
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      ))}
    </main>
  );
};
export default Collections;

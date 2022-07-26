import Link from "next/link";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategories } from "../../src/store/category/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import "./collections.styles.scss";

const Collections = () => {
  const categories = useSelector(selectCategories);

  return (
    <main id="main" className="container collections">
      <h1 className="collections__title">Collections</h1>

      {Object.keys(categories).map((title) => (
        <div key={title} className="collections__collection collection">
          <h2>
            <Link href={`/${title}`}>
              <span className="collection__title">
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </span>
            </Link>
          </h2>

          <div className="collection__products ">
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

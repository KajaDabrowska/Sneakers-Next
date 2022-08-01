import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { selectCategories } from "../../store/category/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import styles from "./category.module.scss";

const Category = () => {
  const categories = useSelector(selectCategories);

  const router = useRouter();
  const { gender } = router.query;

  return (
    <main id="main" className="container">
      <h2 className="category__title">
        {gender &&
          typeof gender === "string" &&
          gender.charAt(0).toUpperCase() + gender?.slice(1)}
      </h2>

      <div className="category__products grid-container">
        {gender &&
          typeof gender === "string" &&
          categories[gender].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};

export default Category;

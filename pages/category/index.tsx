import { useSelector } from "react-redux";

import { selectCategories } from "../../src/store/category/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

type Props = {
  title: string;
};

const Category = ({ title }: Props) => {
  const categories = useSelector(selectCategories);

  return (
    <main id="main" className="container">
      <h2 className="category__title">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h2>

      <div className="category__products grid-container">
        {categories[title].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Category;

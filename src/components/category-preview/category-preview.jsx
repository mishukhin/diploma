import React from "react";
import {
  CategoryPreviewContainer,
  Preview,
} from "./category-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title} className="title">
          {products.title.toUpperCase()}
        </Link>
      </h2>
      <Preview>
        {products.items
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

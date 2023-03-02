import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  return (
    <div className="image">
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default ProductComponent;

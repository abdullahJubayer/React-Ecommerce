import React from "react";
const ic_product = new URL("../assets/images/product.png", import.meta.url)
  .href;

export const ProductItem: React.FC = () => {
  return (
    <div>
      <img src={ic_product} alt="product-img" />
      <p>Hobo Large</p>
      <p className="line-through">$545.00 CAD</p>
      <p>$195.00 CAD</p>
    </div>
  );
};

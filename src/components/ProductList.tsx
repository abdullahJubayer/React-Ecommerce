import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductList: React.FC = () => {
  const items: Array<number> = [1, 2, 3, 4, 5];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-16 my-8">
      {items.map((item) => (
        <ProductItem key={item} />
      ))}
    </div>
  );
};

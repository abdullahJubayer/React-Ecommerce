import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductList: React.FC = () => {
  const items: Array<number> = [1, 2, 3, 4, 5];
  return (
    <div className="grid grid-cols-2 gap-4 mx-4 my-8">
      {items.map((item) => (
        <ProductItem key={item} />
      ))}
    </div>
  );
};

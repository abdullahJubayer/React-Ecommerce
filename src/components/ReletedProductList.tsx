import React from "react";
import { ProductItem } from "./ProductItem";
import { useReletedProducts } from "../hooks/useReletedProducts";

export const ReletedProductList: React.FC<{ productId: number }> = ({
  productId,
}) => {
  const { products, loading, error } = useReletedProducts(productId);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-16 my-8">
      {products &&
        products.map((item) => <ProductItem key={item.id} item={item} />)}
    </div>
  );
};

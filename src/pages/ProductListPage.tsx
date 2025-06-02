import React from "react";
import { ProductItem } from "../components/ProductItem";
import { useProductByCategory } from "../hooks/useProductByCategory";
import { useParams } from "react-router";
import { NavBar } from "../components/NavBar";

export const ProductPageList: React.FC = () => {
  const { catId } = useParams<{ catId: string }>();
  const { products, loading, error } = useProductByCategory(catId + "");
  return (
    <div>
      <NavBar />
      <hr className="h-px border-0 bg-gray-300" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-16 my-8">
        {products &&
          products.map((item) => <ProductItem key={item.id} item={item} />)}
        {products.length == 0 && <div>No Item Found</div>}
      </div>
    </div>
  );
};

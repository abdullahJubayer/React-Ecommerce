import React, { useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { useProductByCategory } from "../hooks/useProductByCategory";
import { useLocation, useParams } from "react-router";
import { NavBar } from "../components/NavBar";
import { FilterDrawer } from "../components/FilterDrawer";
import { ProductItemShimmer } from "../components/ProductItemShimmer";
const ic_filter = new URL("../assets/icons/filter.png", import.meta.url).href;

export type PriceRange = {
  min: number;
  max: number;
};

export const ProductPageList: React.FC = () => {
  const { catId } = useParams<{ catId: string }>();
  const [price, setPrice] = useState<PriceRange>({ min: 10, max: 1000 });
  const { products, loading, error } = useProductByCategory(catId + "", price);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { categoryName } = location.state || {};

  return (
    <div>
      <NavBar />
      <hr className="h-px border-0 bg-gray-300" />
      <div className="mx-8 md:mx-16 my-8">
        {products.length > 0 && (
          <div className="text-2xl">{categoryName ?? ""}</div>
        )}
        {products.length == 0 && <div>No Item Found</div>}
        <div className="flex justify-between my-8">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img className="w-4 h-4" alt="filter-icon" src={ic_filter} />
            <span>Filter and sort</span>
          </div>
          <span>{products.length} products</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 md:mx-16 my-8">
          {products &&
            products.map((item) => <ProductItem key={item.id} item={item} />)}
          {loading && [1, 2, 3, 4].map((e) => <ProductItemShimmer key={e} />)}
        </div>
      </div>
      <FilterDrawer isOpen={isOpen} setIsOpen={setIsOpen} setPrice={setPrice} />
    </div>
  );
};

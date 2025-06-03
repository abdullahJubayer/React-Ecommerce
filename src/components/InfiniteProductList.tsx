import { useState } from "react";
import { useProductPagination } from "../hooks/useProductPagination";
import { ProductItem } from "./ProductItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductItemShimmer } from "./ProductItemShimmer";

export const InfiniteProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { products, loading, error } = useProductPagination(currentPage);

  const fetchData = () => {
    debugger;
    setCurrentPage((prev) => prev + 10);
  };

  return (
    <InfiniteScroll
      dataLength={products ? products.length : 0}
      next={fetchData}
      hasMore={
        !loading && !error && (products ? products.length % 10 === 0 : false)
      }
      loader={<h4 className="text-center">Loading...</h4>}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-16 my-8">
        {products.length === 0 &&
          [1, 2, 3, 4].map((e) => <ProductItemShimmer key={e} />)}
        {products &&
          products.map((item) => <ProductItem key={item.id} item={item} />)}
      </div>
    </InfiniteScroll>
  );
};

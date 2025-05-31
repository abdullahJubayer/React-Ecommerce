import React, { useEffect, useState } from "react";
import { ProductModel } from "../hooks/useProducts";

export const ServerPagination: React.FC = () => {
  const [currentItems, setCurrentItems] = useState<Array<ProductModel>>([]);
  const PER_PAGE = 51;
  const TOTAL_PAGE = 10; //suppose server give it
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=` +
          PER_PAGE
      );
      const data = await response.json();
      setCurrentPage(data);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      <div className="flex justify-center">
        <span>
          {currentPage + 1} / {TOTAL_PAGE}
        </span>
      </div>
      <div className="flex gap-4 justify-center">
        <button
          className="px-8 py-3 border border-gray-400"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          className="px-8 py-3 border border-gray-400"
          onClick={(e) => {
            if (currentPage + 1 < TOTAL_PAGE) {
              e.preventDefault();
              e.stopPropagation();
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

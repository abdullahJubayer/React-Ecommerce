import React, { useEffect, useState } from "react";
import { ProductModel } from "../hooks/useProducts";

export const Pagination: React.FC = () => {
  const [items, setItems] = useState<Array<ProductModel>>([]);
  const [currentItems, setCurrentItems] = useState<Array<ProductModel>>([]);
  const PER_PAGE = 10;
  const TOTAL_PAGE = Math.ceil(items.length / PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log(currentPage);
    console.log(items.length);
    const item = items.slice(
      Math.max(currentPage - 1, 0) * PER_PAGE,
      Math.max(currentPage, 1) * PER_PAGE
    );
    setCurrentItems(item);
  }, [currentPage]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=0&limit=` + 51
      );
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, []);

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

import React from "react";
import { FilterModel } from "./FilterDrawer";
const left_arrow = new URL("../assets/icons/arrow_left.png", import.meta.url)
  .href;

export const PriceFilter: React.FC<{
  setFilter: React.Dispatch<React.SetStateAction<FilterModel>>;
  minRef: React.RefObject<null>;
  maxRef: React.RefObject<null>;
}> = ({ setFilter, minRef, maxRef }) => {
  return (
    <div className="px-6 pt-8">
      <div
        className="flex items-center text-gray-700 mt-4 mb-12 cursor-pointer"
        onClick={() => {
          setFilter((prev) => ({
            ...prev,
            isPriceSelected: false,
          }));
        }}
      >
        <img
          className="w-4 h-4 cursor-pointer me-4"
          alt="filter-icon"
          src={left_arrow}
        />
        <span>Price</span>
      </div>
      <div>
        <span className="text-xs">The highest price is $1000.00</span>
        <div className="flex gap-4 my-4">
          <input
            ref={minRef}
            type="number"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-gray-500 block w-full p-2"
            placeholder="From"
          />
          <input
            ref={maxRef}
            type="number"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-gray-500 block w-full p-2"
            placeholder="To"
          />
        </div>
      </div>
    </div>
  );
};

import React, { useRef, useState } from "react";
import { AvailableFilter } from "./AvailableFilter";
import { PriceFilter } from "./PriceFilter";
import { PriceRange } from "../pages/ProductListPage";
const ic_close = new URL("../assets/icons/close.png", import.meta.url).href;
const right_arrow = new URL("../assets/icons/arrow_right.png", import.meta.url)
  .href;

export type FilterModel = {
  isAvailableSelected: boolean;
  isPriceSelected: boolean;
  isColorSelected: boolean;
};

export const FilterDrawer: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPrice: React.Dispatch<React.SetStateAction<PriceRange>>;
}> = ({ isOpen, setIsOpen, setPrice }) => {
  const [filter, setFilter] = useState<FilterModel>({
    isAvailableSelected: false,
    isPriceSelected: false,
    isColorSelected: false,
  });
  const minRef = useRef(null);
  const maxRef = useRef(null);
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-20 w-64 h-screen transition-transform bg-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <div className="flex-1 flex flex-col text-gray-700 justify-center items-center">
            <span className="">Filter and sort</span>
            <span className="text-xs text-gray-400">6 of 6 products</span>
          </div>
          <img
            className="w-4 h-4 cursor-pointer"
            alt="filter-icon"
            src={ic_close}
            onClick={() => setIsOpen(false)}
          />
        </div>
        <hr className="h-px border-0 bg-gray-300" />

        {filter.isAvailableSelected && (
          <AvailableFilter setFilter={setFilter} />
        )}
        {filter.isPriceSelected && (
          <PriceFilter setFilter={setFilter} minRef={minRef} maxRef={maxRef} />
        )}

        {!filter.isAvailableSelected &&
          !filter.isColorSelected &&
          !filter.isPriceSelected && (
            <ul className="px-8 pt-8">
              <li
                className="flex justify-between items-center text-gray-700 my-8 cursor-pointer"
                onClick={() => {
                  setFilter((prev) => ({
                    ...prev,
                    isAvailableSelected: true,
                    isPriceSelected: false,
                    isColorSelected: false,
                  }));
                }}
              >
                <span>Availability</span>
                <img
                  className="w-4 h-4 cursor-pointer"
                  alt="filter-icon"
                  src={right_arrow}
                />
              </li>
              <li
                className="flex justify-between items-center text-gray-700 my-8 cursor-pointer"
                onClick={() => {
                  setFilter((prev) => ({
                    ...prev,
                    isPriceSelected: true,
                    isAvailableSelected: false,
                    isColorSelected: false,
                  }));
                }}
              >
                <span>Price</span>
                <img
                  className="w-4 h-4 cursor-pointer"
                  alt="filter-icon"
                  src={right_arrow}
                />
              </li>
              <li className="flex justify-between items-center text-gray-700 my-8 cursor-pointer">
                <span>Color</span>
                <img
                  className="w-4 h-4 cursor-pointer"
                  alt="filter-icon"
                  src={right_arrow}
                />
              </li>
              <li className="flex justify-between items-center text-gray-700 my-8">
                <span>Sort by:</span>
                <select className="block text-gray-700">
                  <option value="option1">Best selling</option>
                  <option value="option2">New product</option>
                  <option value="option3">Available</option>
                </select>
              </li>
            </ul>
          )}
        <div className="absolute bottom-0 w-full">
          <hr className="h-px border-0 bg-gray-300" />
          <div className="flex my-4 mx-4">
            <button className="flex-1 text-gray-700 underline">
              Clear all
            </button>
            <button
              className="flex-1 bg-black text-white py-2 rounded-sm text-sm"
              onClick={() => {
                if (filter.isPriceSelected) {
                  setPrice((prev) => ({
                    ...prev,
                    min: minRef?.current.value ?? 0,
                    max: maxRef?.current.value ?? 0,
                  }));
                  setIsOpen(false);
                }
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

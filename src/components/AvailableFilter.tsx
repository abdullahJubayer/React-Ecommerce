import React from "react";
import { FilterModel } from "./FilterDrawer";
const left_arrow = new URL("../assets/icons/arrow_left.png", import.meta.url)
  .href;

export const AvailableFilter: React.FC<{
  setFilter: React.Dispatch<React.SetStateAction<FilterModel>>;
}> = ({ setFilter }) => {
  return (
    <div className="px-6 pt-8">
      <div
        className="flex items-center text-gray-700 mt-4 mb-12 cursor-pointer"
        onClick={() => {
          setFilter((prev) => ({
            ...prev,
            isAvailableSelected: false,
          }));
        }}
      >
        <img
          className="w-4 h-4 cursor-pointer me-4"
          alt="filter-icon"
          src={left_arrow}
        />
        <span>Availability</span>
      </div>
      <div className="flex items-center my-4">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 bg-gray-100 border-gray-300"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm text-gray-700"
        >
          In Stock
        </label>
      </div>
      <div className="flex items-center my-8">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 bg-gray-100 border-gray-300"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm text-gray-700"
        >
          Out of Stock
        </label>
      </div>
    </div>
  );
};

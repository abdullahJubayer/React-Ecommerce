import React from "react";
import { NavBar } from "../components/NavBar";
import { ChipItem } from "../components/ChipItem";
const ic_product = new URL("../assets/images/product.png", import.meta.url)
  .href;
const ic_right_chivrone = new URL(
  "../assets/icons/right_chevron.png",
  import.meta.url
).href;
const ic_left_chivrone = new URL(
  "../assets/icons/left_chevron.png",
  import.meta.url
).href;
const ic_add = new URL("../assets/icons/plus.png", import.meta.url).href;
const ic_minus = new URL("../assets/icons/minus.png", import.meta.url).href;

export const ProductDetails: React.FC = () => {
  return (
    <div>
      <p className="text-sm text-center text-gray-500 my-2">
        Free shipping available on all orders!
      </p>
      <hr className="h-px border-0 bg-gray-200" />
      <NavBar />
      <hr className="h-px border-0 bg-gray-200" />
      <img src={ic_product} alt="product-img" />

      <div className="flex justify-center items-center my-4">
        <img className="w-8 h-8" src={ic_left_chivrone} alt="product-img" />
        <span className="mx-8">1 / 10</span>
        <img className="w-8 h-8" src={ic_right_chivrone} alt="product-img" />
      </div>
      <div className="mx-4">
        <h1 className="text-2xl">Brik</h1>
        <p className="text-gray-500 text-sm my-3">$545.00 CAD</p>
        <p className="text-gray-700 text-xs my-2">Color</p>
        <div className="flex overflow-x-scroll">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <ChipItem title="Chocolate" key={item} />
          ))}
        </div>
        <p className="text-gray-700 text-xs mt-4 mb-2">Quantity</p>
        <div className="flex justify-between border border-red-100 px-4 py-2 w-1/3">
          <img className="w-6 h-6" src={ic_add} alt="product-img" />
          <p className="px-8">1</p>
          <img className="w-6 h-6" src={ic_minus} alt="product-img" />
        </div>
        <button className="w-full border border-gray-700 py-3 my-4">
          Add to cart
        </button>
        <button className="w-full bg-black text-white py-3">Buy it now</button>
        <p className="text-sm text-gray-500 my-6">
          Inspired by the structural boxy form and shape of a brick, which lends
          its name, the bag is perfectly sized for your everyday essentials,
          from a large phone to your wallet and lipstick.
        </p>
        <hr className="h-px border-0 bg-gray-200" />
      </div>
    </div>
  );
};

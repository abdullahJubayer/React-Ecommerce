import React from "react";
const ic_product = new URL("../assets/images/product.png", import.meta.url)
  .href;
const ic_add = new URL("../assets/icons/plus.png", import.meta.url).href;
const ic_minus = new URL("../assets/icons/minus.png", import.meta.url).href;
const ic_detele = new URL("../assets/icons/delete.png", import.meta.url).href;

export const CartItem: React.FC = () => {
  return (
    <div className="flex justify-between m-8">
      <img className="w-1/4" src={ic_product} alt="product-img" />
      <div className="flex-col items-center">
        <p className="text-md text-gray-500">Naomi Mini Wallet</p>
        <p className="text-sm text-gray-500 my-2">Color: Cotton Candy</p>
        <div className="flex items-end">
          <div className="flex justify-between border border-red-100 px-4 py-2">
            <img className="w-6 h-6" src={ic_add} alt="product-img" />
            <p className="px-8">1</p>
            <img className="w-6 h-6" src={ic_minus} alt="product-img" />
          </div>
          <img className="w-6 h-6 ms-2" src={ic_detele} alt="product-img" />
        </div>
      </div>
      <p>$195.00</p>
    </div>
  );
};

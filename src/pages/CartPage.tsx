import React from "react";
import { NavBar } from "../components/NavBar";
import { CartItem } from "../components/CartItem";
import { ProductList } from "../components/ProductList";
import { QuickLinks } from "../components/QuickLinks";

export const Cartpage: React.FC = () => {
  return (
    <div>
      <p className="text-sm text-center text-gray-500 my-2">
        Free shipping available on all orders!
      </p>
      <hr className="h-px border-0 bg-gray-200" />
      <NavBar />
      <hr className="h-px border-0 bg-gray-200" />
      <div className="flex justify-between my-8 mx-4">
        <h1 className="text-2xl text-gray-700">Your cart</h1>
        <h1 className="text-sm underline">Continue shopping</h1>
      </div>
      <div className="flex justify-between mt-8 mx-4">
        <h1 className="text-sm text-gray-700">PRODUCT</h1>
        <h1 className="text-sm">TOTAL</h1>
      </div>
      <hr className="h-px border-0 bg-gray-200 mx-4 mt-2" />
      {[1, 2, 3].map((e) => (
        <CartItem key={e} />
      ))}
      <hr className="h-px border-0 bg-gray-200 mx-4 mt-8" />
      <p className="text-sm text-center mt-8">Subtotal $561.00 CAD</p>
      <p className="text-sm text-center text-gray-500 my-2">
        Taxes and shipping calculated at checkout
      </p>
      <div className="p-4">
        <button className="w-full bg-black text-white py-4">Checkout</button>
      </div>
      <p className="text-xl text-gray-700 mx-4 mt-8">Releted Product</p>
      <ProductList />
      <hr className="h-px border-0 bg-gray-200" />
      <div className="mx-4 md:mx-16 md:flex">
        <QuickLinks title="Quick links" links={["Bags", "Shoes", "LookBook"]} />
        <QuickLinks
          title="Info"
          links={["About", "Contact us", "Shipping policy"]}
        />
      </div>
    </div>
  );
};

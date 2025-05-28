import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { CartItem } from "../components/CartItem";
import { ProductList } from "../components/ProductList";
import { QuickLinks } from "../components/QuickLinks";
import { useAppSelector } from "../store/ReduxStore";
import { ReletedProductList } from "../components/ReletedProductList";

export const Cartpage: React.FC = () => {
  const cartItems = useAppSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.originalPrice * item.purcheseCount,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems]);
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
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <hr className="h-px border-0 bg-gray-200 mx-4 mt-8" />
      <p className="text-sm text-center mt-8">
        Subtotal ${totalPrice.toFixed(2)} CAD
      </p>
      <p className="text-sm text-center text-gray-500 my-2">
        Taxes and shipping calculated at checkout
      </p>
      <div className="p-4">
        <button className="w-full bg-black text-white py-4">Checkout</button>
      </div>
      <p className="text-xl text-gray-700 mx-4 mt-8">Releted Product</p>
      {cartItems.length > 0 && (
        <ReletedProductList productId={cartItems[0].id} />
      )}
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

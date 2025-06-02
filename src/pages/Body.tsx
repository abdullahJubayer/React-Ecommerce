import React from "react";
import { NavBar } from "../components/NavBar";
import { HeaderBg } from "../components/HeaderBg";
import { ProductList } from "../components/ProductList";
import { ProductStockBackLayout } from "../components/ProductStockBackLayout";
import { RefineryItem } from "../components/RefineryItem";
import { QuickLinks } from "../components/QuickLinks";
import { Pagination } from "../components/Pagination";
import { InfiniteProductList } from "../components/InfiniteProductList";

export const Body: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeaderBg />
      <InfiniteProductList />
      <ProductStockBackLayout />
      <iframe
        className="w-full aspect-video my-8"
        src="https://www.youtube.com/embed/7TLP3Y2i4aY?autoplay=1&mute=1&controls=0&loop=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="md:flex">
        <RefineryItem
          image={new URL("../assets/images/refinery.png", import.meta.url).href}
          description="The leather is sourced from environmentally friendly tanneries in Italy, France, and Turkey, where Rure is based and everything is assembled by hand."
        />
        <RefineryItem
          image={new URL("../assets/images/the_cut.png", import.meta.url).href}
          description="All too often, we're forced to pick: style, or sustainability. Recently, more designers have been making environmental impact a top priority"
        />
      </div>
      <hr className="h-px my-8 border-0 bg-gray-700" />
      <div className="mx-4 md:mx-16 md:flex">
        <QuickLinks title="Quick links" links={["Bags", "Shoes", "LookBook"]} />
        <QuickLinks
          title="Info"
          links={["About", "Contact us", "Shipping policy"]}
        />
      </div>
    </>
  );
};

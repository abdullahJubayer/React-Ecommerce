import { useEffect, useRef, useState } from "react";
import { NavBar } from "../components/NavBar";
import { ProductItem } from "../components/ProductItem";
import { QuickLinks } from "../components/QuickLinks";
import { useSearch } from "../hooks/useSearch";
import { ProductModel } from "../hooks/useProducts";
import { ProductItemShimmer } from "../components/ProductItemShimmer";
const ic_search = new URL("../assets/icons/search.png", import.meta.url).href;

export const SearchResult: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { products, loading, error } = useSearch(searchQuery);

  return (
    <div>
      <p className="text-sm text-center text-gray-500 my-2">
        Free shipping available on all orders!
      </p>
      <hr className="h-px border-0 bg-gray-200" />
      <NavBar />
      <hr className="h-px my-8 border-0 bg-gray-200" />
      <div className="mx-4 md:mx-16">
        <h2 className="text-xl text-center text-gray-600 my-8">
          Search results
        </h2>
        <div className="relative">
          <img
            src={ic_search}
            alt="Placeholder"
            className="absolute w-4 h-4 my-auto left-2 top-1/2 transform -translate-y-1/2"
          />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="w-full ps-8 py-2 border border-gray-300 rounded-sm"
          />
        </div>
        <p className="text-center text-gray-500 my-8">
          {products.length} results founds{" "}
          {searchQuery != "" && `for \"${searchQuery}\"`}
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {products &&
            products.map((item) => <ProductItem key={item.id} item={item} />)}
          {loading && [1, 2, 3, 4].map((e) => <ProductItemShimmer key={e} />)}
        </div>
        <hr className="h-px my-8 border-0 bg-gray-200" />
        <div className="mx-4 md:mx-16 md:flex">
          <QuickLinks
            title="Quick links"
            links={["Bags", "Shoes", "LookBook"]}
          />
          <QuickLinks
            title="Info"
            links={["About", "Contact us", "Shipping policy"]}
          />
        </div>
      </div>
    </div>
  );
};

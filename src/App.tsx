import "./App.css";
import { HeaderBg } from "./components/HeaderBg";
import { NavBar } from "./components/NavBar";
import { ProductList } from "./components/ProductList";
import { ProductStockBackLayout } from "./components/ProductStockBackLayout";
import { QuickLinks } from "./components/QuickLinks";
import { RefineryItem } from "./components/RefineryItem";

export function App() {
  return (
    <>
      <NavBar />
      <HeaderBg />
      <ProductList />
      <ProductStockBackLayout />
      <iframe
        className="w-full aspect-video my-8"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>
      <div className="md:flex">
        <RefineryItem
          image={new URL("./assets/images/refinery.png", import.meta.url).href}
          description="The leather is sourced from environmentally friendly tanneries in Italy, France, and Turkey, where Rure is based and everything is assembled by hand."
        />
        <RefineryItem
          image={new URL("./assets/images/the_cut.png", import.meta.url).href}
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
}

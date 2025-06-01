import { Provider } from "react-redux";
import "./App.css";
import { HeaderBg } from "./components/HeaderBg";
import { NavBar } from "./components/NavBar";
import { ProductList } from "./components/ProductList";
import { ProductStockBackLayout } from "./components/ProductStockBackLayout";
import { QuickLinks } from "./components/QuickLinks";
import { RefineryItem } from "./components/RefineryItem";
import { Body } from "./pages/Body";
import { ReduxStorage } from "./store/ReduxStore";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Cartpage } from "./pages/CartPage";
import { ProductDetails } from "./pages/ProductDetails";
import { SearchResult } from "./pages/SearchResult";
import { VirtualListPage } from "./pages/VirtualListPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: VirtualListPage,
  },
  {
    path: "cart",
    Component: Cartpage,
  },
  {
    path: "product-details/:id",
    Component: ProductDetails,
  },
  {
    path: "search",
    Component: SearchResult,
  },
]);

export function App() {
  return (
    <Provider store={ReduxStorage}>
      <RouterProvider router={router} />
    </Provider>
  );
}

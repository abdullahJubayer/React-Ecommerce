import "./App.css";
import { Provider } from "react-redux";
import { Body } from "./pages/Body";
import { ReduxStorage } from "./store/ReduxStore";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Cartpage } from "./pages/CartPage";
import { ProductDetails } from "./pages/ProductDetails";
import { SearchResult } from "./pages/SearchResult";
import { ProductPageList } from "./pages/ProductListPage";
import { AuthPage } from "./pages/AuthPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<Body />} />
        <Route path="cart" element={<Cartpage />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="search" element={<SearchResult />} />
        <Route path="category-product/:catId" element={<ProductPageList />} />
      </Route>
    </>
  )
);

export function App() {
  return (
    <Provider store={ReduxStorage}>
      <RouterProvider router={router} />
    </Provider>
  );
}

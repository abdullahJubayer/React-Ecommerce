import "./App.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<Body />} />
        <Route path="cart" element={<Cartpage />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="search" element={<SearchResult />} />
        <Route path="category-product/:catId" element={<ProductPageList />} />
      </Route> */}
    </>
  )
);

export function App() {
  return (
    <div />
    // <Provider store={ReduxStorage}>
    // <RouterProvider router={router} />
    // </Provider>
  );
}

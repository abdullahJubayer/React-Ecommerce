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

export function App() {
  return (
    <Provider store={ReduxStorage}>
      <Body />
    </Provider>
  );
}

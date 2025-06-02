import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { useAppSelector } from "../store/ReduxStore";
import { useLocation, useNavigate } from "react-router";
import { useCategory } from "../hooks/useCategory";

const ic_menu = new URL("../assets/icons/menu.png", import.meta.url).href;
const ic_cart = new URL("../assets/icons/cart.png", import.meta.url).href;
const ic_search = new URL("../assets/icons/search.png", import.meta.url).href;
const ic_close = new URL("../assets/icons/close.png", import.meta.url).href;

export function NavBar() {
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  const cartItems = useAppSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const { categoris, loading, error } = useCategory();
  const location = useLocation();
  const hideNav = ["/cart", "/search"].includes(location.pathname);

  return (
    <>
      <div className="flex items-center justify-between px-2 md:px-16 py-2">
        <div>
          <img
            src={isMenuItemVisible ? ic_close : ic_menu}
            alt="menu-icon"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsMenuItemVisible(!isMenuItemVisible)}
          />
          {isMenuItemVisible && <MenuItems items={categoris} />}
        </div>
        <h1 className="text-2xl tracking-widest font-semibold">DAWN</h1>
        <div className="flex items-center">
          {!hideNav && (
            <img
              src={ic_search}
              alt="search-icon"
              className="w-6 h-6 me-2 cursor-pointer"
              onClick={() => navigate("/search")}
            />
          )}
          <div className="relative cursor-pointer">
            <span className="absolute right-2 bottom-2 bg-black text-white w-4 h-4 rounded-full text-xs text-center">
              {cartItems.length}
            </span>
            <img
              src={ic_cart}
              alt="cart-icon"
              className="w-12 h-12"
              onClick={() => {
                navigate("/cart");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

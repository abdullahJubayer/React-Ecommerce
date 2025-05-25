import { useState } from "react";
import { MenuItems } from "./MenuItems";

const ic_menu = new URL("../assets/icons/menu.png", import.meta.url).href;
const ic_cart = new URL("../assets/icons/cart.png", import.meta.url).href;
const ic_search = new URL("../assets/icons/lock.png", import.meta.url).href;

export function NavBar() {
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-2 md:px-16 py-4">
        <div>
          <img
            src={ic_menu}
            alt="menu-icon"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsMenuItemVisible(!isMenuItemVisible)}
          />
          {isMenuItemVisible && (
            <MenuItems
              items={[
                {
                  id: 1,
                  name: "Bags",
                  children: [{ id: 11, name: "Black", children: [] }],
                },
                {
                  id: 2,
                  name: "Shoes",
                  children: [{ id: 22, name: "Nike", children: [] }],
                },
                { id: 3, name: "LookBook", children: [] },
              ]}
            />
          )}
        </div>
        <h1 className="text-2xl tracking-widest font-semibold">DAWN</h1>
        <div className="flex items-center">
          <img src={ic_search} alt="search-icon" className="w-8 h-8" />
          <img src={ic_cart} alt="cart-icon" className="w-12 h-12" />
        </div>
      </div>
    </>
  );
}

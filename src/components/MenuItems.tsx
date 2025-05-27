import { useState } from "react";
import { CategoryModel } from "../hooks/useCategory";

const ic_right_arrow = new URL(
  "../assets/icons/right_chevron.png",
  import.meta.url
).href;

export const MenuItems: React.FC<{ items: Array<CategoryModel> }> = ({
  items,
}) => {
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <div className="absolute w-1/2 bg-white z-30 px-2 shadow-md">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 text-xl font-normal text-gray-600 hover:bg-gray-200 cursor-pointer"
            onMouseEnter={(e) => {
              e.preventDefault();
              setHoveredItem(item.id);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setHoveredItem("");
            }}
          >
            <div className="w-full flex items-center justify-between">
              {item.title}
              {item.children.length > 0 && (
                <img className="h-8" src={ic_right_arrow} alt="arrow-icon" />
              )}
            </div>
            {hoveredItem === item.id && item.children.length > 0 && (
              <div className="absolute right-0 bg-white">
                <MenuItems items={item.children} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

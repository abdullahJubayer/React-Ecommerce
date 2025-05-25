import { useState } from "react";

const ic_right_arrow = new URL(
  "../assets/icons/right_arrow.png",
  import.meta.url
).href;

type MenuItem = {
  id: number;
  name: string;
  children: Array<MenuItem>;
};

export const MenuItems: React.FC<{ items: Array<MenuItem> }> = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(-1);

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
              setHoveredItem(-1);
            }}
          >
            <div className="w-full flex items-center justify-between">
              {item.name}
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

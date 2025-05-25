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
  return (
    <div className="absolute bg-white z-30 w-1/2 px-2 py-4 shadow-md">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 text-xl font-normal text-gray-600 hover:bg-gray-200 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              {item.name}
              {item.children.length > 0 && (
                <img className="h-8" src={ic_right_arrow} alt="" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from "react";

type QuickLinksProps = {
  title: string;
  links: Array<string>;
};

export const QuickLinks: React.FC<QuickLinksProps> = ({ title, links }) => {
  return (
    <div className="mx-4 md:mx-16 my-8">
      <h3 className="text-4xl font-normal text-gray-600">{title}</h3>
      <ul className="mt-8">
        {links.map((item) => (
          <li key={item} className="py-2 text-xl font-normal text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from "react";
import { VirtualList } from "../components/VirtualList";
import { ProductModel } from "../hooks/useProducts";

export const VirtualListPage: React.FC = () => {
  return (
    <div className="h-screen">
      <VirtualList
        screenHeight={500}
        itemHeight={250}
        items={Array.from(
          { length: 10000 },
          (_, index) =>
            ({
              id: index + 1,
              title: "Test : " + (index + 1),
              price: 0,
              originalPrice: 0,
              purcheseCount: 1,
            } as ProductModel)
        )}
      />
    </div>
  );
};

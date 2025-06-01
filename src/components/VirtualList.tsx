import React, { Ref, useCallback, useEffect, useRef, useState } from "react";
import { ProductModel } from "../hooks/useProducts";
import { ProductItem } from "./ProductItem";

type VirtualListProps = {
  screenHeight: number;
  itemHeight: number;
  items: Array<ProductModel>;
};

export const VirtualList: React.FC<VirtualListProps> = ({
  screenHeight,
  itemHeight,
  items,
}) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const visibleItemCount = Math.ceil(screenHeight / itemHeight);
  const totalHeight = itemHeight * items.length;
  const startItemIndex = Math.floor(scrollTop / itemHeight);
  const endItemIndex = Math.min(
    startItemIndex + visibleItemCount + 1,
    items.length
  );

  const onScroll = useCallback((event: Event) => {
    const target = event.target as HTMLElement;
    setScrollTop(target.scrollTop);
  }, []);

  useEffect(() => {
    const current = listRef.current;
    if (current) {
      listRef.current?.addEventListener("scroll", onScroll);
      return () => {
        listRef.current?.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  const renderItem = (): Array<React.ReactElement> => {
    const currentItems = items
      .slice(startItemIndex, endItemIndex)
      .map(
        (item) =>
          ({
            id: item.id,
            title: item.title,
            price: item.price + 10,
            description: item.description,
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
            originalPrice: item.price,
            updatedAt: item.updatedAt,
            purcheseCount: 1,
          } as ProductModel)
      )
      .map((e) => (
        <div
          className="border bg-orange-400 mb-8"
          style={{ top: `${(e.id - 1) * itemHeight}px`, position: "absolute" }}
          key={e.id}
        >
          <ProductItem item={e} />
        </div>
      ));
    return currentItems;
  };

  return (
    <div
      ref={listRef}
      style={{
        height: `${screenHeight}px`,
        overflowY: "auto",
        border: "1px solid black",
      }}
      className="relative"
    >
      <div
        style={{
          height: `${totalHeight}px`,
          width: `${itemHeight * 2}px`,
        }}
      >
        {renderItem()}
      </div>
    </div>
  );
};

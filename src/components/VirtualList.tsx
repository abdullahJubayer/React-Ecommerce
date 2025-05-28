import React from "react";

type VirtualListProps = {
  screenHeight: number;
  itemHeight: number;
  totalItem: number;
};

export const VirtualList: React.FC<VirtualListProps> = ({
  screenHeight,
  itemHeight,
  totalItem,
}) => {
  const itemPerPage = Math.round(screenHeight / itemHeight);
  return <div></div>;
};
